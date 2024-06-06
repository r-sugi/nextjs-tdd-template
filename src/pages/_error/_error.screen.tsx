import type { ReactNode } from "react";

export const ErrorScreen = ({
	error,
	onReset,
}: {
	error: Error;
	onReset: () => void;
}): ReactNode => {
	return (
		<>
			Client Error Screen
			{/* TODO: 元のページへ戻るボタンを配置する => errorをクリアする */}
			<div>{JSON.stringify(error, null, 2)}</div>
			<button onClick={onReset}></button>
		</>
	);
};
