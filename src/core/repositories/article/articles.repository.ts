import type { Article } from "@/core/domains/article/article";
import { fetcher } from "@/lib/fetcher";

export const fetchArticleById = async (id: string) => {
	return await fetcher<Article>(`/api/articles/${id}`);
};
