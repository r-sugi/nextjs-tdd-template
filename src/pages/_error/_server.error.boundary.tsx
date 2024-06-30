import type { AppServerErrorMessage } from "@/error/const";
import { outputErrorLog } from "@/error/outputErrorLog";
import { type ReactNode, useEffect } from "react";

type ServerErrorScreenProps = {
	error: AppServerErrorMessage;
	// 個別render関数を渡した場合は、それを使う
	render?: (error: AppServerErrorMessage) => ReactNode | undefined;
};

/**
 * Server Error Screen
 * @returns {ReactNode}
 * @remarks SSRでエラーが発生した場合にSSRで表示する画面
 */
export const ServerErrorBoundary = ({
	error,
	render,
}: ServerErrorScreenProps): ReactNode => {
	if (render) {
		return render(error);
	}

	// TODO: render fallback statusコードに応じてテンプレートを変更する
	return <div>Server Error Screen</div>;
};
