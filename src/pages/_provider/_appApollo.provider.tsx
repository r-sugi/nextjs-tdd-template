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
			onError(({ operation, graphQLErrors, networkError, forward }) => {
				if (graphQLErrors) {
					graphQLErrors.map(({ message, extensions }) => {
						console.log(
							`[GraphQL error]: Message: ${message}, Code: ${extensions.code}, Path: ${extensions.path}`,
						);
						switch (extensions.code) {
							case "invalid-jwt": { // refetch the jwt
								const oldHeaders = operation.getContext().headers;
								const getAccessToken = () => "TODO: getAccessToken()";
								const token = getAccessToken();
								operation.setContext({
									headers: {
										...oldHeaders,
										authorization: `Bearer ${token}`,
									},
								});
								// retry the request, returning the new observable
								return forward(operation);
							}
							case "data-exception":
								console.log("TODO: DBが返すエラー処理");
								break;
							case "validation-failed":
								// props.history.push("/something-went-wrong"); // redirect to something-went-wrong page
								break;
							default:
								// default case
								console.log(extensions.code);
						}
					});
				}
				if (networkError) {
					console.log(`TODO: [Network error]: ${networkError}`);
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
