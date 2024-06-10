import type { ApolloError } from "@apollo/client";
import type { GraphQLErrors } from "@apollo/client/errors";

// hasuraのエラーコード
const schemaErrorCodes = [
	"constraint-violation", // テーブルの制約違反 復帰不可能なエラーとして扱う
	"validation-failed", // query validation-error 復帰不可能なエラーとして扱う
	"data-exception", // 復帰不可能なエラーとして扱う
];

export const apolloErrorHandler = (error: ApolloError): GraphQLErrors => {
	if (error.networkError) {
		throw new Error("Network Error");
	}
	if (
		error.graphQLErrors.some((err) =>
			schemaErrorCodes.includes((err.extensions?.code as string) ?? ""),
		)
	) {
		throw new Error("validation Error");
	}
	// 下記が不要なら削除する
	return error.graphQLErrors;
};
