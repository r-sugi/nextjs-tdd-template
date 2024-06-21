import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { Logger } from "@/lib/logger";
import { FirebaseError } from "firebase/app";
import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { transformClientAuthError } from "../../../error/auth/transform.error";

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
			new Logger().fatal(error);
			notify.setError(error);
		}
	};

	return {
		signOut,
	};
};
