import { ClientLogger } from "@/lib/clientLogger";
import { HttpError } from "../errors/httpError";

type ErrorResult = {
  message: string;
  code: string;
  cause: string;
  validationMessages?: { param: string; messages: string[] }[];
};

export class ClientAppErrorErrorsFilter {
  constructor(private readonly logger = new ClientLogger()) {
    this.logger.setContext(this.constructor.name);
  }

  catch(error: unknown): ErrorResult {
    // コンソールログ出力
    this.logger.error(error);

    // TODO: axiomでエラーを送信する処理をよぶ?

    // デフォルトのエラーメッセージを生成
    let errorJson: ErrorResult = {
      message: "サーバーでエラーが発生しました",
      cause: "",
      code: "",
    };

    // エラーの種類によって処理を分ける
    if (error instanceof HttpError) {
      errorJson = {
        ...errorJson,
        message: error.message,
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
