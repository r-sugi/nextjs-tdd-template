import { APP_ERROR, type AppErrorMessage } from "app/src/error/const";
import { FirebaseError } from "firebase/app";

export const transformClientAuthError = (
	error: unknown,
): AppErrorMessage | undefined => {
	if (error instanceof FirebaseError) {
		// サインアップ系
		if (error.code === "auth/email-already-in-use") {
			// TODO: runtime errorをマージする
			// https://github.com/r-sugi/nextjs-tdd-template/pull/113#discussion_r1653793977
			return APP_ERROR.BUSINESS.RECOVERABLE.AU10;
		}
		// サインイン系
		if (error.code === "auth/user-not-found") {
			return APP_ERROR.BUSINESS.RECOVERABLE.AU20;
		}
		// ネットワーク系
		if (error.code === "auth/network-request-failed") {
			return APP_ERROR.BUSINESS.UNRECOVERABLE.AU99;
		}
	}
};
