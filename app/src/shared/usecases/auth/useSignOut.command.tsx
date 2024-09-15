import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useErrorNotificationContext } from "app/src/feature/error/banner/ErrorNotificationContext";
import { signOut } from "app/src/shared/repositories/auth";

export const useSignOut = () => {
	const { notify } = useErrorNotificationContext();

	return {
		signOutMutation: async () => {
			const { error } = await signOut();
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
		},
	};
};
