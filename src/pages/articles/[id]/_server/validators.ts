import type { ParsedUrlQuery } from "node:querystring";
import { HttpError } from "@/error/transform/http/HttpError";
import { z } from "zod";

type Success = { params: { id: string } };
type Failure = { error: HttpError };
type ValidateParamsResult = Success | Failure;

const paramsSchema = z.object({
	id: z.string().regex(/.*[0-9]/, {
		message: "idは数値で指定してください",
	}),
});

/**
 * @param {ParsedUrlQuery} params
 */
export const validateParams = (
	params?: ParsedUrlQuery,
): ValidateParamsResult => {
	const result = paramsSchema.safeParse(params?.id);
	if (!result.success) {
		const error = new HttpError({
			error: {
				message: result.error.message,
			},
			status: 400,
			statusText: "Bad Request",
		});
		return { error };
	}
	return { params: result.data };
};
