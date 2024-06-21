import { Component, type ErrorInfo, type ReactNode } from "react";

import { transformBoundaryError } from "@/error/transform/boundary/transform";
import { transformUnhandledRejectionError } from "@/error/transform/unhandledRejection/transform";
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
				throw transformUnhandledRejectionError(e.reason);
			},
		);
	}

	componentWillUnmount() {
		window.removeEventListener(
			"unhandledrejection",
			(e: PromiseRejectionEvent) => {
				throw transformUnhandledRejectionError(e.reason);
			},
		);
	}

	componentDidCatch(err: Error, errInfo: ErrorInfo) {
		this.setState(() => {
			return {
				error: transformBoundaryError(err, errInfo),
			};
		});
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
