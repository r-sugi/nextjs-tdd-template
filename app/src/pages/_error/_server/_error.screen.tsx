import type { AppServerErrorMessage } from "app/src/error/const";
import type { ReactNode } from "react";

export const ServerErrorScreen = ({
	error,
	onReset,
}: {
	error: AppServerErrorMessage;
	onReset: () => void;
}): ReactNode => {
	return (
		<>
			Default Server Error Screen
			<div>{error.title}</div>
			<div>{error.message}</div>
			<div>{error.myErrorCode}</div>
			<button type="button" onClick={onReset} />
		</>
	);
};
