import type { AppServerErrorMessage } from "app/src/error/const";

import { publicPages } from "app/src/const/paths";
import type { Article } from "app/src/core/domains/article/article";
import { ServerErrorBoundary } from "app/src/pages/_error/_server/_error.boundary";
import { Seo } from "app/src/pages/_seo/seo";
import type { NextPage } from "next";
import { ServerErrorScreen } from "./_server/errorScreen";

export { getServerSideProps } from "./_server";

type Success = { article: Article };
type Failure = { error: AppServerErrorMessage };
export type PagePropsType = Success | Failure;

const ArticleDetail: NextPage<PagePropsType> = (props) => {
	if ("error" in props) {
		// エラー画面のテンプレートを指定、リセットボタンはデフォルトのものを使用する。
		return (
			<ServerErrorBoundary error={props.error} render={ServerErrorScreen} />
		);
	}

	return (
		<>
			<Seo
				title={publicPages.articleDetail.title(props.article.title)}
				description={publicPages.articleDetail.description(
					props.article.description,
				)}
				path={publicPages.articleDetail.path(props.article.id)}
			/>
			ArticleDetail: {props.article.title}
		</>
	);
};

export default ArticleDetail;
