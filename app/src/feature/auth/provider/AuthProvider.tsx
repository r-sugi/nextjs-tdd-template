import { stubAuthContext } from "@/mocks/fixtures/provider/useStubAuthContext";
import { type User, getAuth, onAuthStateChanged } from "firebase/auth";
import type { FC, ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type GlobalAuthState = {
	member: undefined | User | null;
};
const initialState: GlobalAuthState = {
	member: undefined,
};
export const AuthContext = createContext<GlobalAuthState>(initialState);

type Props = { children: ReactNode };

const useAuthContextValue = (): GlobalAuthState => {
	const [state, setState] = useState<GlobalAuthState>(initialState);
	useEffect(() => {
		try {
			const auth = getAuth();
			return onAuthStateChanged(auth, (member) => {
				setState({ member });
			});
		} catch (error) {
			setState(initialState);
			throw error;
		}
	}, []);

	return state;
};

export const AuthProvider: FC<Props> = ({ children }) => {
	const testing =
		process.env.NODE_ENV === "test" || process.env.RUNTIME_ENV === "storybook";
	const value = testing ? stubAuthContext.signedIn : useAuthContextValue();

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
