import type { Article } from "app/src/core/domains/article/article";

export const mockArticle1: Article = {
	id: "1",
	title: "記事1のタイトルですよ！",
	description: "description",
	content: "content",
	createdAt: "2021-09-01",
	updatedAt: "2021-09-01",
} as const satisfies Article;

export const mockArticle2 = {
	id: "2",
	title: "記事2のタイトルですよ！",
	description: "description",
	content: "content",
	createdAt: "2021-09-01",
	updatedAt: "2021-09-01",
} as const satisfies Article;
