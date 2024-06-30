import { useEffect, useState } from "react";
import type { AppErrorMessage } from "../const";

export const useNotification = () => {
	const [error, notify] = useState<AppErrorMessage | null>(null);

	useEffect(() => {
		if (error) {
			// 一旦alertでエラーを表示している
			window.alert(error);
			notify(null);
		}
	}, [error]);

	return {
		notify,
	};
};
