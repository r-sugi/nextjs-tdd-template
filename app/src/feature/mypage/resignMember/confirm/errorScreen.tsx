import type { ReactNode } from "react";

import { loginRequiredPages } from "@/const/paths";

export const ErrorScreen = ({
	error,
	onReset,
}: {
	error: Error;
	onReset: () => void;
}): ReactNode => {
	return (
		<div data-testid="error-screen">
			エラーが発生しました
			<div>Error: {error.name}</div>
			<button type="button" onClick={onReset}>
				入力画面からやり直す
			</button>
		</div>
	);
};
