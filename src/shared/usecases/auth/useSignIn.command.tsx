import { outputErrorLog } from "@/error/outputErrorLog";
import { useErrorNotificationContext } from "@/feature/error/banner/ErrorNotificationContext";
import { type SignInProps, signIn } from "@/shared/repositories/auth";

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
