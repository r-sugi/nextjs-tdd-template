import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { transformClientAuthError } from "@/error/auth/transformClientAuthError";
import { ClientLogger } from "@/lib/clientLogger";
import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
} from "firebase/auth";

type SignUp = {
	email: string;
	password: string;
};
export const useSignUp = () => {
	const notify = useNotifyAPIError();

	const signUp = async (signUpProps: SignUp) => {
		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				signUpProps.email,
				signUpProps.password,
			);
			await sendEmailVerification(userCredential.user);
		} catch (error) {
			if (error instanceof FirebaseError) {
				return notify.setError(transformClientAuthError(error));
			}
			new ClientLogger().fatal(error);
			notify.setError(error);
		}
	};

	return {
		signUp,
	};
};
