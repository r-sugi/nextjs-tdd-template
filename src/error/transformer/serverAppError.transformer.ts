import { HttpError } from "../errors/httpError";
import { MY_ERROR, ERROR_CODE } from "../errors/const";
import { ServerLogger } from "@/lib/serverLogger";

export type ServerErrorResult = {
  message: string;
  code: string;
  myErrorMessage: {
    title?: string;
    message?: string;
    myErrorCode: string;
  };
  validationMessages?: { param: string; messages: string[] }[];
  resultStatus: number;
};

type OptionType = {
  logger?: ServerLogger;
};

export class ServerAppErrorTransformer {
  constructor() {}

  transform(error: unknown, options?: OptionType): ServerErrorResult {
    const logger = options?.logger ?? new ServerLogger();

    // デフォルトのエラーメッセージを生成
    const errorJson: ServerErrorResult = {
      message: "サーバーでエラーが発生しました",
      code: ERROR_CODE.INTERNAL_SERVER_ERROR,
      myErrorMessage: MY_ERROR.EER99,
      resultStatus: 500,
    };

    // エラーの種類によって処理を分ける
    if (error instanceof HttpError) {
      // TODO: severity次第でログレベルが変わる
      logger.error(error);
      return {
        ...errorJson,
        message: error.message,
        resultStatus: error.status,
      };
    }

    if (error instanceof Error) {
      // サーバーログ出力
      logger.fatal(error);
      return {
        ...errorJson,
        message: error.message,
      };
    }

    return errorJson;
  }
}
