import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { ClientLogger } from "@/lib/clientLogger";
import { FirebaseError } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
} from "firebase/auth";
import { clientAuthErrorLogger } from "../error/logger";

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
				const formatError = clientAuthErrorLogger(error);
				return notify.setError(formatError);
			}
			new ClientLogger().fatal(error);
			notify.setError(error);
		}
	};

	return {
		signUp,
	};
};
