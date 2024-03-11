import { Logger } from "@/lib/logger";
import { HttpError } from "../errors/http-error";

export class ClientAppErrorErrorsFilter {
  constructor(private readonly logger: Logger) {
    this.logger.setContext(this.constructor.name);
  }

  catch(error: Error): void {
    // コンソールログ出力
    this.logger.error(error);

    // TODO: axiomでエラーを送信する処理を追加する

    // TODO: エラーの種類によって処理を分ける
    if (error instanceof HttpError) {
    } else if (error instanceof Error) {
    } else {
    }
    // TODO: 最後に何を返すか？ or void?
  }
}
