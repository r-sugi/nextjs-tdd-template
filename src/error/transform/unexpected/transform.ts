import {
	APP_ERROR,
	type AppServerErrorMessage,
	type RuntimeError,
} from "@/error/const";

export const transformUnexpectedError = (
	error: unknown,
): AppServerErrorMessage => {
	return {
		...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
		runtime: {
			stack: JSON.stringify(error),
		} as RuntimeError,
		status: 500,
	};
};
