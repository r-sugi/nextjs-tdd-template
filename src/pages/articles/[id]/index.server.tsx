import { transformHttpError } from "@/error/transform/http/transform";
import type { GetServerSideProps } from "next";
import type { PagePropsType } from "./index.page";
import { validateArticleId } from "./validates";

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
		const error = validateArticleId(params?.id);
		if (error) throw error;

		// TODO: apiClientを定義する: https://github.com/r-sugi/nextjs-tdd-template/pull/3/files#diff-9c9133059a24e4baa23dcac75f848e20a92f33b86a97bb0c44ff5a8e3d00cae0

		// TODO: fetchのラッパー関数をコールする

		// TODO: mswでmockを取得できたか疎通する
		const res = await fetch(`/articles/${params?.id}`);
		const json = await res.json().catch(() => ({}));

		return {
			props: {
				article: json,
			},
		};
	} catch (error) {
		// TODO: transformを多重に呼び出す関数用を用意したい
		const serverError = transformHttpError(error);
		res.statusCode = serverError.status;
		return {
			props: {
				error: serverError,
			},
		};
	}
};
