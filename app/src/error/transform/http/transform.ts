import { APP_ERROR, type AppServerErrorMessage } from "@/error/const";
import { HttpError } from "./HttpError";

export const transformHttpError = (
	error: unknown,
): AppServerErrorMessage | undefined => {
	if (error instanceof HttpError) {
		const errInfo = {
			runtime: {
				stack: JSON.stringify(error),
			},
			status: error.status,
		};
		switch (error.status) {
			case 400:
				// INVALID_REQUEST
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H400,
					...errInfo,
				};
			case 401:
				// UNAUTHORIZED
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H401,
					...errInfo,
				};
			case 403:
				// FORBIDDEN
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H403,
					...errInfo,
				};
			case 404:
				// NOT_FOUND
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H404,
					...errInfo,
				};
			case 500:
				// INTERNAL_SERVER_ERROR
				return {
					...APP_ERROR.BUSINESS.UNRECOVERABLE.H500,
					...errInfo,
				};
			default:
				// UNRECOVERABLE
				return {
					...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
					...errInfo,
				};
		}
	}
};
