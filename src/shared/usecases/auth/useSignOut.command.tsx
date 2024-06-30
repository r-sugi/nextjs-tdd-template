import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { signOut } from "@/shared/repositories/auth";

export const useSignOut = () => {
	const { notify } = useNotification();

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
