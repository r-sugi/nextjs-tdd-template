import pino, { Logger as PinoLogger } from "pino";

export class ClientLogger {
  private readonly p: PinoLogger;
  private context: Record<string, any> = {};

  constructor() {
    if (typeof window !== "undefined") {
      this.p = pino({
        browser: { asObject: true },
      });
      this.p.level = this.logLevel();
    } else {
      throw new Error("ClientLoggerはブラウザでのみ使用可能です");
    }
  }

  setContext(context: string): void {
    this.context = Object.assign(this.context, { context });
  }

  logLevel() {
    let logLevel: pino.LevelWithSilent;
    switch (process.env.NODE_ENV) {
      case "development":
        logLevel = "trace";
        break;
      case "test":
        logLevel = "trace";
        break;
      default:
        logLevel = "error";
    }
    return logLevel;
  }

  info(message: any): void {
    this.p.info({ message, ...this.context });
  }

  error(message: any): void {
    this.p.error({ message, ...this.context });
  }
  critical(message: any): void {
    // pinoにcriticalはないのでerrorで代用
    this.p.error({ message, ...this.context });
  }
  fatal(message: any): void {
    this.p.fatal({ message, ...this.context });
  }
}
