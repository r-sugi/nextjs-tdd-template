import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { ClientLogger } from "@/lib/clientLogger";
import { FirebaseError } from "firebase/app";
import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { transformClientAuthError } from "../../../error/auth/transformClientAuthError";

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
			new ClientLogger().fatal(error);
			notify.setError(error);
		}
	};

	return {
		signOut,
	};
};
