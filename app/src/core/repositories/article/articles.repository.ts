import type { Article } from "app/src/core/domains/article/article";
import { fetcher } from "app/src/lib/fetcher";

const ORIGIN = "http://localhost:3000";

export const fetchArticleById = async (id: string) => {
	return await fetcher<Article>(`${ORIGIN}/api/articles/${id}`);
};
