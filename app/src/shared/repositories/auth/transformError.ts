import type { AppErrorMessage } from "app/src/error/const";
import { transformClientAuthError } from "app/src/error/transform/auth/transform";
import { transformUnexpectedError } from "app/src/error/transform/unexpected/transform";
import { FirebaseError } from "firebase/app";

export const transformError = (error: unknown): AppErrorMessage => {
	if (error instanceof FirebaseError) {
		const res = transformClientAuthError(error);
		if (res) return res;
	}
	return transformUnexpectedError(error);
};
