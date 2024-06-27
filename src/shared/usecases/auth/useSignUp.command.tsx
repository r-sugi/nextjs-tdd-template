import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { type SignUpProps, signUp } from "@/shared/repositories/auth";

export const useSignUp = () => {
	const { notify } = useNotification();

	return {
		signUpMutation: async (signUpProps: SignUpProps) => {
			const { error } = await signUp(signUpProps);
			if (error) {
				notify(error);
				await outputErrorLog(error);
			}
		},
	};
};
