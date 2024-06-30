import { type User, getAuth, onAuthStateChanged } from "firebase/auth";
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type GlobalAuthState = {
	member: undefined | User | null;
};
const initialState: GlobalAuthState = {
	member: undefined,
};
const AuthContext = createContext<GlobalAuthState>(initialState);

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
	const [member, setMember] = useState<GlobalAuthState>(initialState);

	useEffect(() => {
		try {
			const auth = getAuth();
			return onAuthStateChanged(auth, (member) => {
				setMember({ member });
			});
		} catch (error) {
			setMember(initialState);
			throw error;
		}
	}, []);

	return <AuthContext.Provider value={member}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
