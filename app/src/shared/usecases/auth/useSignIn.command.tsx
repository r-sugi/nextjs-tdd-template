import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useErrorNotificationContext } from "app/src/feature/error/banner/ErrorNotificationContext";
import { type SignInProps, signIn } from "app/src/shared/repositories/auth";

export const useSignIn = () => {
	const { notify } = useErrorNotificationContext();

	return {
		signInMutation: async (signInProps: SignInProps) => {
			const { error } = await signIn(signInProps);
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
		},
	};
};
