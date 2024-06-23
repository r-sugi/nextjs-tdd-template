import { transformBoundaryError } from "@/error/transform/boundary/transform";
import { HttpError } from "@/error/transform/http/HttpError";
import { transformHttpError } from "@/error/transform/http/transform";
import { useNotifyAPIError } from "@/hooks/error/useNotifyAPIError";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { transformClientAuthError } from "../../../error/transform/auth/transform";

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
			// question(zawa): ここって到達しますっけ？
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
