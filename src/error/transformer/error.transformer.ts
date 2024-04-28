import { ClientLogger } from "@/lib/clientLogger";

import { ClientError, ClientErrorObject } from "../errors/clientError";
import { HttpError } from "../errors/httpError";

export class ErrorTransformer {
  constructor(private readonly logger = new ClientLogger()) {
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
