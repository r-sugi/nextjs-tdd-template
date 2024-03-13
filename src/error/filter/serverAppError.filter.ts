import { ServerLogger } from "@/lib/serverLogger";
import { HttpError } from "../errors/httpError";

export class ServerAppErrorErrorsFilter {
  constructor(private readonly logger: ServerLogger) {
    this.logger.setContext(this.constructor.name);
  }

  catch(error: Error): void {
    // サーバーログ出力
    this.logger.error(error);

    // TODO: エラーの種類によって処理を分ける
    if (error instanceof HttpError) {
    } else if (error instanceof Error) {
    } else {
    }
    // TODO: 最後に何を返すか？ or void?
  }
}
