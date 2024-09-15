import { mockArticle1, mockArticle2 } from "app/src/mocks/fixtures/article";
import { http, HttpResponse } from "msw";

export const articleHandlers = [
	http.get("/api/articles/1", () => {
		return HttpResponse.json({
			data: mockArticle1,
		});
	}),
	http.get("/api/articles/2", () => {
		return HttpResponse.json({
			data: mockArticle2,
		});
	}),
];
