import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { ClientLogger } from "@/lib/clientLogger";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { transformClientAuthError } from "../../../error/auth/transformClientAuthError";

type SignInProps = {
	email: string;
	password: string;
};
export const useSignIn = () => {
	const notify = useNotifyAPIError();

	const signIn = async (signInProps: SignInProps) => {
		try {
			const auth = getAuth();
			await signInWithEmailAndPassword(
				auth,
				signInProps.email,
				signInProps.password,
			);
		} catch (error) {
			if (error instanceof FirebaseError) {
				return notify.setError(transformClientAuthError(error));
			}
			new ClientLogger().fatal(error);
			notify.setError(error);
		}
	};

	return {
		signIn,
	};
};
