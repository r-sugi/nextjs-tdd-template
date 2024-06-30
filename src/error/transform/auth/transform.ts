import { APP_ERROR, type AppErrorMessage } from "@/error/const";
import { FirebaseError } from "firebase/app";

export const transformClientAuthError = (error: unknown): AppErrorMessage => {
	if (error instanceof FirebaseError) {
		// サインアップ系
		if (error.code === "auth/email-already-in-use") {
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
	return APP_ERROR.SYSTEM.UNRECOVERABLE.EE99;
};
