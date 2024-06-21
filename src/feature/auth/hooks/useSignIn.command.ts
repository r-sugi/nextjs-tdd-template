import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { transformBoundaryError } from "@/error/boundary/transform";
import { HttpError } from "@/error/http/HttpError";
import { transformHttpError } from "@/error/http/transform";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { transformClientAuthError } from "../../../error/auth/transform";

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
			if (error instanceof HttpError) {
				return notify.setError(transformHttpError(error));
			}
			notify.setError(transformBoundaryError(error));
		}
	};

	return {
		signIn,
	};
};
