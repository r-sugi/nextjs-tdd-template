import { type User, getAuth, onAuthStateChanged } from "firebase/auth";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type GlobalAuthState = {
	user: User | null;
};
const initialState: GlobalAuthState = {
	user: null,
};
const AuthContext = createContext<GlobalAuthState>(initialState);

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<GlobalAuthState>(initialState);

	useEffect(() => {
		try {
			const auth = getAuth();
			return onAuthStateChanged(auth, (user) => {
				setUser({
					user,
				});
			});
		} catch (error) {
			setUser(initialState);
			throw error;
		}
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
