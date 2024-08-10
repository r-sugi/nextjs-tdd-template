import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import type { GetServerSideProps } from "next";
import type { PagePropsType } from "../index.page";
import { transformError } from "./transformError";
import { validateParams } from "./validators";

export const getServerSideProps: GetServerSideProps = async ({
	res,
	params,
}): Promise<{
	props: PagePropsType;
}> => {
	try {
		// 1. パラメータのバリデーション
		const result = validateParams(params);
		// 検査例外は個別に処理する
		if ("error" in result) {
			res.statusCode = result.error.status; // ステータスコードをセットする
			return {
				props: {
					error: transformError(result.error),
				},
			};
		}

		// 2. 認証チェック
		// 未認証の場合は、403エラーを返す(or ログインページにリダイレクトさせる)

		// 3. APIでデータ取得
		const { data: article } = await fetchArticleById(result.params.id);
		return {
			props: {
				article,
			},
		};
	} catch (error) {
		// (上記の3)検査例外 or 非検査例外は共通で処理する
		const formatError = transformError(error);
		res.statusCode = formatError.status; // ステータスコードをセットする
		return {
			props: {
				error: formatError,
			},
		};
	}
};
