import { transformBoundaryError } from "@/error/transform/boundary/transform";
import { HttpError } from "@/error/transform/http/HttpError";
import { transformHttpError } from "@/error/transform/http/transform";
import { useNotifyAPIError } from "@/hooks/error/useNotifyAPIError";
import { FirebaseError } from "firebase/app";
import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { transformClientAuthError } from "../../../error/transform/auth/transform";

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
