import type { Article } from "@/core/domains/article/article";
import { fetcher } from "@/lib/fetcher";

const ORIGIN = "http://localhost:3000";

export const fetchArticleById = async (id: string) => {
	return await fetcher<Article>(`${ORIGIN}/api/articles/${id}`);
};
