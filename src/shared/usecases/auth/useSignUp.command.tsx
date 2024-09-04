import { outputErrorLog } from "@/error/outputErrorLog";
import { useErrorNotificationContext } from "@/feature/error/banner/ErrorNotificationContext";
import { type SignUpProps, signUp } from "@/shared/repositories/auth";

export const useSignUp = () => {
	const { notify } = useErrorNotificationContext();

	return {
		signUpMutation: async (signUpProps: SignUpProps) => {
			const { error } = await signUp(signUpProps);
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
		},
	};
};
