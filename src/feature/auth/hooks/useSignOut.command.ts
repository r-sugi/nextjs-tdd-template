import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { transformBoundaryError } from "@/error/boundary/transform";
import { HttpError } from "@/error/http/HttpError";
import { transformHttpError } from "@/error/http/transform";
import { FirebaseError } from "firebase/app";
import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { transformClientAuthError } from "../../../error/auth/transform";

export const useSignOut = () => {
	const notify = useNotifyAPIError();

	const signOut = async () => {
		try {
			const auth = getAuth();
			await firebaseSignOut(auth);
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
		signOut,
	};
};
