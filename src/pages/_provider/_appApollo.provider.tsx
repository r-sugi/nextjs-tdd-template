import {
	NEXT_PUBLIC_GRAPHQL_URI,
	NEXT_PUBLIC_GRAPHQL_WS_URI,
} from "@/config/env";
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	from,
	split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { type FC, type ReactNode, useMemo } from "react";

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

	const httpLink = useMemo(() => {
		return from([
			errorLink, // TODO: エラーリンクってここでいいのか？
			new HttpLink({
				uri: NEXT_PUBLIC_GRAPHQL_URI,
			}),
		]);
	}, [errorLink]);

	const wsLink = useMemo(() => {
		return new GraphQLWsLink(
			createClient({
				url: NEXT_PUBLIC_GRAPHQL_WS_URI,
			}),
		);
	}, []);

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === "OperationDefinition" &&
				definition.operation === "subscription"
			);
		},
		wsLink,
		httpLink,
	);

	const client = useMemo(
		() =>
			new ApolloClient({
				link: splitLink,
				cache: new InMemoryCache(),
				defaultOptions: {
					watchQuery: {
						fetchPolicy: "no-cache",
					},
				},
			}),
		[splitLink],
	);
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
