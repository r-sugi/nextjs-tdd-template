import { Logger } from "@/lib/logger";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const transformBoundaryError = (error: unknown, errInfo?: any) => {
	// TODO: エラーの種類で処理を分岐させる(ログレベル、エラーメッセージの変換、エラー通知の有無など)
	new Logger().fatal({ error, errInfo });
	// TODO: send error to errorlog server
	return error;
};
