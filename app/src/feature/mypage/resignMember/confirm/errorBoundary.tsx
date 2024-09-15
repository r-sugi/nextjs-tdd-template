import { Component, type ErrorInfo, type ReactNode } from "react";

import { Logger } from "app/src/lib/logger";
import { NoCacheError } from "app/src/utils/cache/error";

import { loginRequiredPages, publicPages } from "app/src/const/paths";
import { transformBoundaryError } from "app/src/error/transform/boundary/transform";
import { ErrorScreen as ConfirmErrorScreen } from "./errorScreen";

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
		if (error instanceof NoCacheError) {
			this.setState(() => {
				return {
					error,
				};
			});
			return error;
		}
		throw transformBoundaryError(error, errInfo);
	}
	render() {
		if (this.state.error) {
			return (
				<ConfirmErrorScreen
					error={this.state.error}
					onReset={() => {
						this.setState(() => {
							return {
								error: undefined,
							};
						});
						window.location.href =
							loginRequiredPages.mypageResignMemberInput.path();
					}}
				/>
			);
		}
		return this.props.children;
	}
}
