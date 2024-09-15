import { AuthProvider } from "@/feature/auth/provider/AuthProvider";
import type { ReactNode } from "react";
import { ErrorBoundary } from "../_error/_error.boundary";
import { AppApolloProvider } from "./_appApollo.provider";

export const AppProvider = ({
	children,
}: { children: ReactNode }): JSX.Element => {
	return (
		<ErrorBoundary>
			<AppApolloProvider>
				<AuthProvider>{children}</AuthProvider>
			</AppApolloProvider>
		</ErrorBoundary>
	);
};
