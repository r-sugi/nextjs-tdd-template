import type { AppServerErrorMessage } from "@/error/const";

import { publicPages } from "@/const/paths";
import type { Article } from "@/core/domains/article/article";
import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import { ServerErrorBoundary } from "@/pages/_error/_server.error.boundary";
import { Seo } from "@/pages/_seo/seo";
import type { NextPage } from "next";
import { useEffect } from "react";

export { getServerSideProps } from "./_server";

type Success = { article: Article };
type Failure = { error: AppServerErrorMessage };
export type PagePropsType = Success | Failure;

const ArticleDetail: NextPage<PagePropsType> = (props) => {
	if ("error" in props) {
		return <ServerErrorBoundary error={props.error} />;
	}

	console.log("server article", props.article);

	useEffect(() => {
		(async () => {
			const res = await fetchArticleById("2");
			console.log("mswで値を返せている？", res.data);
		})();
	}, []);

	return (
		<>
			<Seo
				title={publicPages.articleDetail.title(props.article.title)}
				description={publicPages.articleDetail.description(
					props.article.description,
				)}
				path={publicPages.articleDetail.path(props.article.id)}
			/>
			ArticleDetail {props.article.title} ですよ！
		</>
	);
};

export default ArticleDetail;
