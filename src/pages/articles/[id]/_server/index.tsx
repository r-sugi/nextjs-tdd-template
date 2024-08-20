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
		// 1. 例: パラメータのバリデーション
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

		// 2. 例: 認証チェック
		// 未認証の場合は、403エラーを返す(or ログインページにリダイレクトさせる)

		// 3. 例: APIでデータ取得(エラーの場合は内部で)
		const fetchResult = await fetchArticleById(result.params.id);
		if ("error" in fetchResult) {
			res.statusCode = fetchResult.error.status;
			return {
				props: {
					error: transformError(fetchResult.error),
				},
			};
		}
		return {
			props: {
				article: fetchResult.response.data,
			},
		};
	} catch (error) {
		// 非検査例外をまとめて処理する(pages/_error.tsxで自動的にエラーになるから不要かも？)
		const formatError = transformError(error);
		res.statusCode = formatError.status;
		return {
			props: {
				error: formatError,
			},
		};
	}
};
