import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { transformClientAuthError } from "@/error/auth/transform";
import { transformBoundaryError } from "@/error/boundary/transform";
import { HttpError } from "@/error/http/HttpError";
import { transformHttpError } from "@/error/http/transform";
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
			if (error instanceof HttpError) {
				return notify.setError(transformHttpError(error));
			}
			notify.setError(transformBoundaryError(error));
		}
	};

	return {
		signUp,
	};
};
