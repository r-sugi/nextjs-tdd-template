import {
	APP_ERROR,
	type AppServerErrorMessage,
	type RuntimeError,
} from "@/error/const";
import { HttpError } from "./HttpError";

export const transformHttpError = (error: unknown): AppServerErrorMessage => {
	if (error instanceof HttpError) {
		const errInfo = {
			runtime: {
				stack: JSON.stringify(error),
			},
			status: error.status,
		};
		switch (error.status) {
			case 400:
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H400,
					...errInfo,
				};
			case 401:
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H401,
					...errInfo,
				};
			case 403:
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H403,
					...errInfo,
				};
			case 404:
				return {
					...APP_ERROR.BUSINESS.RECOVERABLE.H404,
					...errInfo,
				};
			case 500:
				return {
					...APP_ERROR.SYSTEM.UNRECOVERABLE.H500,
					...errInfo,
				};
			default:
				return {
					...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
					...errInfo,
				};
		}
	}
	return {
		...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
		runtime: {
			stack: JSON.stringify(error),
		} as RuntimeError,
		status: 500,
	};
};
