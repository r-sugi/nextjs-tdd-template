import { ClientLogger } from "@/lib/clientLogger";
import { HttpError } from "../errors/httpError";

export type ClientErrorObject = {
  message: string;
  code: string;
  cause: string;
  validationMessages: { param: string; messages: string[] }[];
  severity: string;
};

export class ClientError extends Error {
  public code: string;
  public severity: string;
  public cause: string;
  public validationMessages: { param: string; messages: string[] }[];

  constructor(errorJson: ClientErrorObject) {
    super(errorJson.message);
    this.cause = errorJson.cause;
    this.code = errorJson.code;
    this.validationMessages = errorJson.validationMessages;
    this.severity = errorJson.severity;
  }
}

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
