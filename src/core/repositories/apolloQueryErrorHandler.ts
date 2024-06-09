import type { ApolloError } from "@apollo/client";
import type { GraphQLErrors } from "@apollo/client/errors";

export const apolloQueryErrorHandler = (error: ApolloError): GraphQLErrors => {
	if (error.networkError) {
		// TODO: 専用のエラーを定義する。復帰不可能なエラーであるため、専用エラー画面を表示する
		throw new Error("Network Error");
	}
	// TODO: 何がエラーとして返るのか不明。下記が不要なら削除する
	return error.graphQLErrors;
};
