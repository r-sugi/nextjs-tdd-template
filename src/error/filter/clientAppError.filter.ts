import { ClientLogger } from "@/lib/clientLogger";
import { HttpError } from "../errors/httpError";

// export type ClientErrorResult = {
//   message: string;
//   code: string;
//   cause: string;
//   validationMessages?: { param: string; messages: string[] }[];
//   serverity: string;
// };

// transform ->
export class ClientError extends Error {
  constructor() {
    // ここで値を入れる
  }
}

export class ClientAppErrorErrorsFilter {
  constructor(private readonly logger = new ClientLogger()) {
    this.logger.setContext(this.constructor.name);
  }

  catch(error: unknown): ClientError {
    // コンソールログ出力
    this.logger.error(error);

    // TODO: axiomでエラーを送信する処理をよぶ?
    // エラーの種類によって処理を分ける

    // TODO: error.causeを入れる
    if (error instanceof HttpError) {
      errorJson = {
        ...errorJson,
        message: error.message,
      };
      return new ClientError(errorJson);
    }
    if (error instanceof Error) {
      // errorJson = {
      //   ...errorJson,
      //   message: error.message,
      // };
      return new ClientError();
    }

    //
    return new ClientError();
  }
}
