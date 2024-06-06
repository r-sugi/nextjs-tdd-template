import type { ReactNode } from "react";

import { ErrorBoundary } from "@/pages/_error/_error.boundary";

import { AppApolloProvider } from "./_appApollo.provider";

export const AppProvider = ({
	children,
}: { children: ReactNode }): JSX.Element => {
	return (
		<AppApolloProvider>
			<ErrorBoundary>{children}</ErrorBoundary>
		</AppApolloProvider>
	);
};
