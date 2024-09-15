import { publicPages } from "app/src/const/paths";
import type { AppServerErrorMessage } from "app/src/error/const";
import { outputErrorLog } from "app/src/error/outputErrorLog";
import type { ReactNode } from "react";
import { ServerErrorScreen } from "./_error.screen";

type ServerErrorScreenProps = {
	error: AppServerErrorMessage;
	render?: ({
		error,
		onReset,
	}: {
		error: AppServerErrorMessage;
		onReset: () => void;
	}) => ReactNode | undefined;
	reset?: () => void;
};

const defaultOnReset = () => {
	window.location.href = publicPages.index.path();
};

export const ServerErrorBoundary = ({
	error,
	render,
	reset,
}: ServerErrorScreenProps): ReactNode => {
	outputErrorLog(error); // ログ出力
	if (render) {
		const onReset = reset ?? defaultOnReset;
		return render({ error, onReset });
	}
	return <ServerErrorScreen error={error} onReset={defaultOnReset} />;
};
