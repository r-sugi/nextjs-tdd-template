import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { type SignInProps, signIn } from "@/shared/repositories/auth";

export const useSignIn = async (signInProps: SignInProps) => {
	const { notify } = useNotification();
	const { error } = await signIn(signInProps);
	if (error) {
		notify(error);
		await outputErrorLog(error);
	}
};
