import { Component, type ErrorInfo, type ReactNode } from "react";

import { ClientError } from "@/error/errors/clientError";
import { ErrorTransformer } from "@/error/transformer/error.transformer";
import { ClientLogger } from "@/lib/clientLogger";

import { UnhandledRejectionError } from "@/error/errors/unhandledRejectionError";
import { ErrorScreen } from "./_error.screen";

type ErrorBoundaryState = { error?: Error };
type ErrorBoundaryProps = { children: ReactNode };
export class ErrorBoundary extends Component<ErrorBoundaryProps> {
	state: ErrorBoundaryState = {
		error: undefined,
	};
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	constructor(props: ErrorBoundaryProps) {
		super(props);
	}
	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { error };
	}

	componentDidMount() {
		// 非同期処理内で発生したエラー Uncaught (in promise) をキャッチする
		window.addEventListener(
			"unhandledrejection",
			(e: PromiseRejectionEvent) => {
				throw new UnhandledRejectionError(e.reason);
			},
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"unhandledrejection",
			(e: PromiseRejectionEvent) => {
				throw new UnhandledRejectionError(e.reason);
			},
		);
	}

	componentDidCatch(err: Error, errInfo: ErrorInfo) {
		new ClientLogger().error({
			err,
			errInfo,
		});
		if (err instanceof ClientError) {
			this.setState(() => {
				return {
					error: err,
				};
			});
		} else {
			this.setState(() => {
				return {
					error: new ErrorTransformer().transform(err),
				};
			});
		}
	}
	render() {
		if (this.state.error) {
			return (
				<ErrorScreen
					error={this.state.error}
					onReset={() => {
						this.setState(() => {
							return {
								error: undefined,
							};
						});
					}}
				/>
			);
		}
		return this.props.children;
	}
}
