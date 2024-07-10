import type { Article } from "@/core/domains/article/article";
import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import { outputErrorLog } from "@/error/outputErrorLog";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import type { PagePropsType } from "../index.page"; // TODO: この型を使う
import { type BeforeAction, sequence } from "./sequence";
import { transformError } from "./transformError";
import { validateParams } from "./validators";

const isValidSchema: BeforeAction = async (context) => {
	const result = validateParams(context.params);
	if ("error" in result) {
		throw transformError(result.error);
	}
};

const act: GetServerSideProps<{ article: Article }, { id: string }> = async ({
	params,
}) => {
	const validateResult = validateParams(params);
	if ("error" in validateResult) {
		throw transformError(validateResult.error);
	}
	// 上記のバリデーションが前段にないと、paramsの型解決をすることになる
	const result = await fetchArticleById(validateResult.params.id);
	return {
		props: {
			article: result.data,
		},
	};
};

const action = sequence<{ article: Article }, { id: string }>(
	[isValidSchema],
	act,
	{
		catchError: (e) => {
			return {
				props: {
					error: transformError(e),
				},
			};
		},
	},
);

export const getServerSideProps = async (
	context: GetServerSidePropsContext<{ id: string }>,
) => {
	const result = await action(context);
	if (result.error) {
		outputErrorLog(result.error);
	}
	// nextのresにstatus codeをセットしたい。これをしないとエラーがあっても200になる
	res.statusCode = result.error.status;
	return result;
};
