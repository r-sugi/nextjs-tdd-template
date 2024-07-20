import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import type { GetServerSideProps } from "next";
import type { PagePropsType } from "../index.page";
import { type SequenceBeforeAction, sequence } from "./sequence";
import { transformError } from "./transformError";
import { validateParams } from "./validators";

const isValidSchema: SequenceBeforeAction = async (context) => {
	const result = validateParams(context.params);
	if ("error" in result) {
		throw transformError(result.error);
	}
};

export const getServerSideProps: GetServerSideProps<PagePropsType, { id: string }> = sequence<PagePropsType, { id: string }>(
	[isValidSchema],
	async (context) => {
		const { params } = context;
		const result = await fetchArticleById(params.id);
		return {
			props: {
				article: result.data,
			},
		};
	},
);
