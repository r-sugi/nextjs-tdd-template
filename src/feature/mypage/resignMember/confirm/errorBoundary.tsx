import { Component, type ErrorInfo, type ReactNode } from "react";

import { ClientLogger } from "@/lib/clientLogger";
import { NoCacheError } from "@/utils/cache/error";

import { ErrorScreen } from "./errorScreen";

type ErrorBoundaryState = { error?: Error };
type ErrorBoundaryProps = { children: ReactNode };

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
	state: ErrorBoundaryState = {
		error: undefined,
	};
	constructor(props: ErrorBoundaryProps) {
		super(props);
	}
	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { error };
	}
	componentDidCatch(error: Error, errInfo: ErrorInfo) {
		// ログ出力する
		new ClientLogger().error({
			err: error,
			errInfo,
		});
		// このコンポーネントでレンダーさせたい個別エラーの場合は、エラーをセットして処理を終了する。
		if (error instanceof NoCacheError) {
			this.setState(() => {
				return {
					error,
				};
			});
			return;
		}
		// 上記以外はさらに外側のエラーバウンダリに処理を委譲するため、エラーを再スローしている。
		throw new Error(error.message);
	}
	render() {
		if (this.state.error) {
			return (
				<ErrorScreen
					error={this.state.error}
					onReset={(path: string) => {
						this.setState(() => {
							return {
								error: undefined,
							};
						});
						window.location.href = path;
					}}
				/>
			);
		}
		return this.props.children;
	}
}
