import { Logger } from "@/lib/logger";

export const transformUnhandledRejectionError = (
	error: PromiseRejectionEvent,
) => {
	// TODO: エラーの種類で処理を分岐させる(ログレベル、エラーメッセージの変換、エラー通知の有無など)
	new Logger().fatal({ error });
	// TODO: send error to errorlog server
	return new Error("unhandledrejection");
};
