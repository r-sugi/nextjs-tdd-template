import { Component, type ErrorInfo, type ReactNode } from "react";

import { ClientLogger } from "@/lib/clientLogger";
import { NoCacheError } from "@/utils/cache/error";

import { loginRequiredPages, publicPages } from "@/const/paths";
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
			return error;
		}
		throw new Error(error.message);
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
