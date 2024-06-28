import type { ParsedUrlQuery } from "node:querystring";
import { HttpError } from "@/error/transform/http/HttpError";
import { z } from "zod";

/**
 * @remarks zod schema 一旦数値であるかの検証のみを行っている
 */
const articleIdSchema = z.string().regex(/.*[0-9]/, {
	message: "idは数値で指定してください",
});

/**
 * @param {ParsedUrlQuery["id"]} id
 * @returns {HttpError | undefined}
 * @description idが数値であるか検証する
 * @remarks getServerSideProps内で使用することを前提としている。
 */
export const validateArticleId = (
	id: ParsedUrlQuery["id"],
): HttpError | undefined => {
	const result = articleIdSchema.safeParse(id);
	if (!result.success) {
		return new HttpError({
			data: undefined,
			error: {
				message: result.error.message,
			},
			status: 400,
			statusText: "Bad Request",
		});
	}
};
