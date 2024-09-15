import { APP_ERROR, type AppErrorMessage } from "@/error/const";

export const transformBoundaryError = (
	error: Error,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	errInfo?: any,
): AppErrorMessage => {
	return {
		...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
		runtime: { cause: error.cause, stack: errInfo },
	};
};
