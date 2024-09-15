import type { AppServerErrorMessage } from "app/src/error/const";
import { HttpError } from "app/src/error/transform/http/HttpError";
import { transformHttpError } from "app/src/error/transform/http/transform";
import { transformUnexpectedError } from "app/src/error/transform/unexpected/transform";

// @remarks: ユースケースごとに想定される検査例外をキャッチして。変換している。
export const transformError = (error: unknown): AppServerErrorMessage => {
	if (error instanceof HttpError) {
		const httpError = transformHttpError(error);
		if (httpError) return httpError;
	}
	return transformUnexpectedError(error);
};
