import type { AppServerErrorMessage } from "app/src/error/const";
import type { ReactNode } from "react";

/* ユースケースごとに専用の画面デザインがある場合 */
export const ServerErrorScreen = ({
	error,
	onReset,
}: {
	error: AppServerErrorMessage;
	onReset: () => void;
}): ReactNode => {
	return (
		<>
			Article Detail Server Error Screen
			<div>{error.title}</div>
			<div>{error.message}</div>
			<div>{error.myErrorCode}</div>
			<button type="button" onClick={onReset} />
		</>
	);
};
