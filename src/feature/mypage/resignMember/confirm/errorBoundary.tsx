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
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	constructor(props: ErrorBoundaryProps) {
		super(props);
	}
	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { error };
	}

	componentDidCatch(error: Error, errInfo: ErrorInfo) {
		new ClientLogger().error({
			err: error,
			errInfo,
		});
		if (error instanceof NoCacheError) {
			this.setState(() => {
				return {
					error,
				};
			});
			return;
		}
		throw new Error(error.message);
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
						window.location.reload;
					}}
				/>
			);
		}
		return this.props.children;
	}
}
