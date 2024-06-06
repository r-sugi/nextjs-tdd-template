import { Component, type ErrorInfo, type ReactNode } from "react";

import { ClientError } from "@/error/errors/clientError";
import { ErrorTransformer } from "@/error/transformer/error.transformer";
import { ClientLogger } from "@/lib/clientLogger";

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
	componentDidCatch(err: Error, errInfo: ErrorInfo) {
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
		new ClientLogger().error({
			err,
			errInfo,
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
