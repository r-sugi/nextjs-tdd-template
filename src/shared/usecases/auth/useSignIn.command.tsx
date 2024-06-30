import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { type SignInProps, signIn } from "@/shared/repositories/auth";

export const useSignIn = () => {
	const { notify } = useNotification();

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
