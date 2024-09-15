import type { AppErrorMessage } from "@/error/const";
import { transformClientAuthError } from "@/error/transform/auth/transform";
import { transformUnexpectedError } from "@/error/transform/unexpected/transform";
import { FirebaseError } from "firebase/app";

export const transformError = (error: unknown): AppErrorMessage => {
	if (error instanceof FirebaseError) {
		const res = transformClientAuthError(error);
		if (res) return res;
	}
	return transformUnexpectedError(error);
};
