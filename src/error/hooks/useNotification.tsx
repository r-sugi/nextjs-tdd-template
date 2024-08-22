import { useEffect, useState } from "react";
import type { AppErrorMessage } from "../const";

// TODO: contextにする
export const useNotification = () => {
	const [error, notify] = useState<AppErrorMessage | null>(null);

	useEffect(() => {
		if (error) {
			// 一旦alertでエラーを表示している
			// window.alert(error);
			// TODO: バナー領域にエラーメッセージを表示する
			notify(null);
		}
	}, [error]);

	return {
		notify,
	};
};
