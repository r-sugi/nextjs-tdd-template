import type { Article } from "app/src/core/domains/article/article";
import { Logger } from "app/src/lib/logger";
import { mockArticle1, mockArticle2 } from "app/src/mocks/fixtures/article";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = Article;

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	new Logger().info(`Server API: ${req.url} called!`);

	// This is a mock API, so we can just return the mock data
	// TODO: モックサーバーを用意する？
	if (req.query.id === "1") {
		res.status(200).json(mockArticle1);
		res.end();
		return;
	}
	res.status(200).json(mockArticle2);
	res.end();
	return;
}
