import { useEffect, useState } from "react";

export const useNotifyAPIError = () => {
	// TODO: Errorの型をanyにしているので、エラーの型を指定したい
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		if (error) {
			// 一旦alertでエラーを表示している
			window.alert(error);
			setError(null);
		}
	}, [error]);

	return {
		setError,
	};
};
