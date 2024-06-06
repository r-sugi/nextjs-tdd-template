import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { type FC, type ReactNode, useMemo } from "react";

import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";

export const AppApolloProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const errorLink = useMemo(
		() =>
			onError(({ operation, graphQLErrors, networkError }) => {
				if (graphQLErrors) {
					for (const { message, extensions } of graphQLErrors) {
						console.log(
							`[GraphQL error]: Message: ${message}, Code: ${extensions.code}, Path: ${extensions.path}, Operation: ${operation}`,
						);
					}
				}
				if (networkError) {
					console.log(
						`[Network error]: ${networkError}, Operation: ${operation}`,
					);
				}
			}),
		[],
	);

	const link = useMemo(() => {
		return from([
			errorLink,
			new HttpLink({
				uri: NEXT_PUBLIC_GRAPHQL_URI,
			}),
		]);
	}, [errorLink]);

	const client = useMemo(
		() =>
			new ApolloClient({
				link,
				cache: new InMemoryCache(),
				defaultOptions: {
					watchQuery: {
						fetchPolicy: "no-cache",
					},
				},
			}),
		[link],
	);
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
