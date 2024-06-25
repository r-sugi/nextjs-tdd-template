import type { HttpError } from "./HttpError";

// TODO: SSR側で使うと想定。使うときに修正する
export const transformHttpError = (error: HttpError) => {
	// TODO: エラーの種類で処理を分岐させる(ログレベル、エラーメッセージの変換、エラー通知の有無など)
	// TODO: send error to errorlog server
	return error;
};
