import { useNotifyAPIError } from "@/core/usecases/error/useNotifyAPIError";
import { ClientLogger } from "@/lib/clientLogger";
import { FirebaseError } from "firebase/app";
import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import { clientAuthErrorLogger } from "../error/logger";

export const useSignOut = () => {
	const notify = useNotifyAPIError();

	const signOut = async () => {
		try {
			const auth = getAuth();
			await firebaseSignOut(auth);
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
		signOut,
	};
};
