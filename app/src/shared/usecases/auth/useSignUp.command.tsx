import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useErrorNotificationContext } from "app/src/feature/error/banner/ErrorNotificationContext";
import { type SignUpProps, signUp } from "app/src/shared/repositories/auth";

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
