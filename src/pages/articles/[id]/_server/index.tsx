import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import type { GetServerSideProps } from "next";
import type { PagePropsType } from "../index.page";
import { type BeforeAction, sequence } from "./sequence";
import { transformError } from "./transformError";
import { validateParams } from "./validators";

const isValidSchema: BeforeAction = async (context) => {
	const result = validateParams(context.params);
	if ("error" in result) {
		throw transformError(result.error);
	}
};

const act: GetServerSideProps<PagePropsType, { id: string }> = async ({
	params,
}) => {
	const validateResult = validateParams(params);
	if ("error" in validateResult) {
		throw transformError(validateResult.error);
	}
	// TODO: 上記のバリデーションが前段にないと、paramsの型解決をすることになる
	const result = await fetchArticleById(params.id);
	return {
		props: {
			article: result.data,
		},
	};
};

export const getServerSideProps = sequence<PagePropsType, { id: string }>(
	[isValidSchema],
	act,
);
