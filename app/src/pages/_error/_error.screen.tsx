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
			<div>{JSON.stringify(error, null, 2)}</div>
			<button type="button" onClick={onReset} />
		</>
	);
};
