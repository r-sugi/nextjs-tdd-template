import { Logger } from "@/lib/logger";
import { ClientError, type ClientErrorObject } from "./http/clientError";
import { HttpError } from "./http/httpError";

// TODO:
export class ErrorTransformer {
	constructor(private readonly logger = new Logger()) {
		this.logger.setContext(this.constructor.name);
	}

	transform(error: unknown): ClientError {
		this.logger.error(error);

		// TODO: 一旦定義して型エラーを回避している
		const defaultErrorJson: ClientErrorObject = {
			message: "",
			cause: "",
			code: "",
			validationMessages: [],
			severity: "error",
		};

		// エラーの種類によって処理を分ける
		if (error instanceof HttpError) {
			const errorJson = {
				...defaultErrorJson,
				message: error.message,
				// TODO: cause: error.cause,
			};
			return new ClientError(errorJson);
		}
		if (error instanceof Error) {
			const errorJson = {
				...defaultErrorJson,
				message: error.message,
				// TODO: cause: error.cause,
			};
			return new ClientError(errorJson);
		}
		return new ClientError(defaultErrorJson);
	}
}
