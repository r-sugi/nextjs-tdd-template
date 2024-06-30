import { mockArticle1, mockArticle2 } from "mocks/fixtures/article";
import { rest } from "msw";

export const articleHandlers = [
	rest.get("/api/articles/1", (_, res, ctx) => {
		return res(ctx.json(mockArticle1));
	}),
	rest.get("/api/articles/2", (_, res, ctx) => {
		return res(ctx.json(mockArticle2));
	}),
];
