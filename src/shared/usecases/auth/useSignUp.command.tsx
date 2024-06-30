import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { type SignUpProps, signUp } from "@/shared/repositories/auth";

export const useSignUp = async (signUpProps: SignUpProps) => {
	const { notify } = useNotification();
	const { error } = await signUp(signUpProps);
	if (error) {
		notify(error);
		await outputErrorLog(error);
	}
};
