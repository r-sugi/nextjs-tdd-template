import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	from,
} from "@apollo/client";
import { type FC, type ReactNode, useMemo } from "react";

import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";

export const AppApolloProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const link = useMemo(() => {
		return from([
			new HttpLink({
				uri: NEXT_PUBLIC_GRAPHQL_URI,
			}),
		]);
	}, []);
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
