import type { AppServerErrorMessage } from "@/error/const";
import { HttpError } from "@/error/transform/http/HttpError";
import { transformHttpError } from "@/error/transform/http/transform";
import { transformUnexpectedError } from "@/error/transform/unexpected/transform";

export const transformError = (error: unknown): AppServerErrorMessage => {
	if (error instanceof HttpError) {
		const httpError = transformHttpError(error);
		if (httpError) return httpError;
	}
	return transformUnexpectedError(error);
};
