import pino, { Logger as PinoLogger } from "pino";

export class Logger {
  private readonly p: PinoLogger;

  constructor() {
    if (typeof window === "undefined") {
      this.p = pino({});
    } else {
      this.p = pino({
        browser: { asObject: true },
      });
    }
    // ログレベルの設定
    this.p.level = this.logLevel();
  }

  setContext(context: string): void {
    this.p.child({ context });
  }

  logLevel() {
    let logLevel: pino.LevelWithSilentOrString;
    switch (process.env.NODE_ENV) {
      case "development":
        logLevel = "verbose";
        break;
      case "test":
        logLevel = "verbose";
        break;
      default:
        logLevel = "log";
    }
    return logLevel;
  }

  info(message: any): void {
    this.p.info(message);
  }

  error(message: any): void {
    this.p.error(message);
  }
  critical(message: any): void {
    // pinoにcriticalはないのでerrorで代用
    this.p.error(message);
  }
  fatal(message: any): void {
    this.p.fatal(message);
  }
}
