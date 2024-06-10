import type { ApolloError } from "@apollo/client";
import type { GraphQLErrors } from "@apollo/client/errors";

// hasuraのエラーコード
const schemaErrorCodes = [
	"constraint-violation", // テーブルの制約違反 復帰不可能なエラーとして扱う
	"validation-failed", // query validation-error 復帰不可能なエラーとして扱う
	"data-exception", // 400であるがカラム名を含まないため画面に表示不可能 復帰不可能なエラーとして扱う
];

export const apolloErrorHandler = (error: ApolloError): GraphQLErrors => {
	if (error.networkError) {
		// TODO: 専用のエラーを定義する。復帰不可能なエラーであるため、専用エラー画面を表示する
		throw new Error("Network Error");
	}
	if (
		error.graphQLErrors.some((err) =>
			schemaErrorCodes.includes((err.extensions?.code as string) ?? ""),
		)
	) {
		// TODO: 専用のエラーを定義する。復帰不可能なエラーであるため、専用エラー画面を表示する
		throw new Error("validation Error");
	}
	// TODO: 何がエラーとして返るのか不明。下記が不要なら削除する
	return error.graphQLErrors;
};
