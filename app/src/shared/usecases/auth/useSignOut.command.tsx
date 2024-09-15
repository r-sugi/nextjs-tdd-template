import { outputErrorLog } from "@/error/outputErrorLog";
import { useErrorNotificationContext } from "@/feature/error/banner/ErrorNotificationContext";
import { signOut } from "@/shared/repositories/auth";

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
