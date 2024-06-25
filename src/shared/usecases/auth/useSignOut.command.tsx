import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { signOut } from "@/shared/repositories/auth";

export const useSignOut = async () => {
	const { notify } = useNotification();
	const { error } = await signOut();
	if (error) {
		notify(error);
		await outputErrorLog(error);
	}
};
