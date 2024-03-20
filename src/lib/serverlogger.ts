import pino, { Logger as PinoLogger } from "pino";

export class ServerLogger {
  private readonly p: PinoLogger;
  private context: Record<string, any> = {};

  constructor() {
    if (typeof window === "undefined") {
      this.p = pino({
        level: this.logLevel(),
      });
    } else {
      throw new Error("ServerLoggerはサーバーでのみ使用可能です");
    }
  }

  setContext(context: string): void {
    this.context = Object.assign(this.context, { context });
  }

  setLogLevel(logLevel: pino.LevelWithSilent): void {
    this.p.level = logLevel;
  }

  logLevel() {
    let logLevel: pino.LevelWithSilent;
    switch (process.env.NODE_ENV) {
      case "development":
        logLevel = "trace";
        break;
      case "test":
        logLevel = "info";
        break;
      default:
        logLevel = "error";
    }
    return logLevel;
  }

  info(message: any): void {
    this.setLogLevel("info");
    this.p.info({ message, ...this.context });
  }

  // 400, 403, 404など
  error(message: any): void {
    this.setLogLevel("error");
    this.p.error({ message, ...this.context });
  }
  // 429, 409系。ユーザーが操作できるが、サーバー側で問題が発生している可能性がある(アカウントロック、クライアントリクエストのタイムアウトなどの原因への気づきが得られる)　要件次第で必要か判断する
  critical(message: any): void {
    this.setLogLevel("error");
    this.p.error({ message, ...this.context });
  }
  // 500。ユーザーが操作で復帰できない(開発者のバグ、サーバー側のダウンなど。オンコール対象)
  fatal(message: any): void {
    this.setLogLevel("fatal");
    this.p.fatal({ message, ...this.context });
  }
}
