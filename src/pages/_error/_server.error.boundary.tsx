import type { AppServerErrorMessage } from "@/error/const";
import { outputErrorLog } from "@/error/outputErrorLog";
import { type ReactNode, useEffect } from "react";

type ServerErrorScreenProps = {
	error: AppServerErrorMessage;
	// render関数を渡すことで、エラー画面をカスタマイズできる
	render?: (error: AppServerErrorMessage) => ReactNode | undefined;
};

export const ServerErrorBoundary = ({
	error,
	render,
}: ServerErrorScreenProps): ReactNode => {
	outputErrorLog(error); // ログを出力する

	if (render) {
		return render(error);
	}
	// TODO: (statusコードに応じた)デフォルトのエラー画面
	return <div>Server Error Screen</div>;
};
