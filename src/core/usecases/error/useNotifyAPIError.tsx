import type { ApolloError } from "@apollo/client";
import { useEffect, useState } from "react";

export const useNotifyAPIError = () => {
	const [error, setError] = useState<ApolloError | null>(null);

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
