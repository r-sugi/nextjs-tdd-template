import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import { outputErrorLog } from "@/error/outputErrorLog";
import { transformHttpError } from "@/error/transform/http/transform";
import type { GetServerSideProps } from "next";
import type { PagePropsType } from "../index.page";
import { transformError } from "./transformError";
import { validateParams } from "./validators";

// TODO: spec sample
// https://github.com/r-sugi/nextjs-tdd-template/pull/3/files#diff-b56454a25c39fecb16597cfa3955937c7e4a1cc4116b6c3dcc1d5d7cde1f1bd9
// https://github.com/r-sugi/nextjs-tdd-template/pull/13/files#diff-c37210b8fe6f319a37d5aa846874d896bf81e04ef0541894667d3b5f52a62082

export const getServerSideProps: GetServerSideProps = async ({
	res,
	params,
}): Promise<{
	props: PagePropsType;
}> => {
	try {
		const result = validateParams(params);
		if ("error" in result) {
			throw result.error;
		}

		// TODO: mswでmockを取得できたか疎通する
		const res = await fetchArticleById(result.params.id);
		return {
			props: {
				article: res.data,
			},
		};
	} catch (error) {
		const formatError = transformError(error);
		outputErrorLog(formatError);
		res.statusCode = formatError.status;
		return {
			props: {
				error: formatError,
			},
		};
	}
};
