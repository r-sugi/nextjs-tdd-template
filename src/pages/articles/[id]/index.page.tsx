import type { AppServerErrorMessage } from "@/error/const";

import { publicPages } from "@/const/paths";
import type { Article } from "@/core/domains/article/article";
import { ServerErrorBoundary } from "@/pages/_error/_server.error.boundary";
import { Seo } from "@/pages/_seo/seo";
import type { NextPage } from "next";

export { getServerSideProps } from "./_server";

type Success = { article: Article };
type Failure = { error: AppServerErrorMessage };
export type PagePropsType = Success | Failure;

const ArticleDetail: NextPage<PagePropsType> = (props) => {
	if ("error" in props) {
		// エラーが発生した場合は、ServerErrorBoundaryにエラー情報を渡す
		return <ServerErrorBoundary error={props.error} />;
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
