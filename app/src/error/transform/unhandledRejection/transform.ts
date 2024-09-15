import { APP_ERROR, type AppErrorMessage } from "app/src/error/const";

export const transformUnhandledRejectionError = (
	error: PromiseRejectionEvent,
): AppErrorMessage => {
	if (error.reason instanceof PromiseRejectionEvent) {
		return APP_ERROR.SYSTEM.UNRECOVERABLE.EE98;
	}
	return APP_ERROR.SYSTEM.UNRECOVERABLE.EE99;
};
