import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { type FC, type ReactNode, useMemo } from "react";

import { NEXT_PUBLIC_GRAPHQL_URI } from "app/src/config/env";

export const AppApolloProvider: FC<{
	children: ReactNode;
}> = ({ children }) => {
	const errorLink = useMemo(
		() =>
			onError(({ operation, graphQLErrors, networkError, forward }) => {
				if (graphQLErrors) {
					graphQLErrors.map(({ message, extensions }) => {
						// console.log(
						// 	`[GraphQL error]: Message: ${message}, Code: ${extensions.code}, Path: ${extensions.path}`,
						// );
						switch (extensions?.code) {
							// session系の処理のみ必要。
							case "invalid-jwt": {
								// refetch the jwt
								const oldHeaders = operation.getContext().headers;
								const getAccessToken = () => "TODO: getAccessToken()";
								const token = getAccessToken();
								// TODO: tokenが取得できない場合は、ログイン画面にリダイレクトする(window.location? or セッション切れエラーを発生させてErrroBoundaryで処理できるか調査する。unhandledrejectionかもしれない)
								operation.setContext({
									headers: {
										...oldHeaders,
										authorization: `Bearer ${token}`,
									},
								});
								// retry the request, returning the new observable
								return forward(operation);
							}
							default:
							// default case
							// console.log(extensions.code);
						}
					});
				}
				// if (networkError) {
				// console.log(`TODO: [Network error]: ${networkError}`);
				// }
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
