import { ServerLogger } from "@/lib/serverLogger";
import { HttpError } from "../errors/httpError";
import { MY_ERROR, ERROR_CODE } from "../errors/const";

export type ServerErrorResult = {
  message: string;
  code: string;
  myErrorMessage: {
    title?: string;
    message?: string;
    myErrorCode: string;
  };
  validationMessages?: { param: string; messages: string[] }[];
  redirectCode: number;
};

export class ServerAppErrorErrorsFilter {
  constructor(private readonly logger = new ServerLogger()) {
    this.logger.setContext(this.constructor.name);
  }

  catch(error: unknown): ServerErrorResult {
    // サーバーログ出力
    this.logger.error(error);

    // デフォルトのエラーメッセージを生成
    let errorJson: ServerErrorResult = {
      message: "サーバーでエラーが発生しました",
      code: ERROR_CODE.INTERNAL_SERVER_ERROR,
      myErrorMessage: MY_ERROR.EER99,
      redirectCode: 500,
    };

    // エラーの種類によって処理を分ける
    if (error instanceof HttpError) {
      errorJson = {
        ...errorJson,
        message: error.message,
        redirectCode: error.status,
      };
    }
    if (error instanceof Error) {
      errorJson = {
        ...errorJson,
        message: error.message,
      };
    }

    return errorJson;
  }
}
