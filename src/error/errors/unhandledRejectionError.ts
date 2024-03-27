export class UnhandledRejectionError extends Error {
  public code: string;
  public severity: string;
  public cause: string;
  public validationMessages: { param: string; messages: string[] }[];

  constructor(reason: string) {
    // TODO: error/errors/const.tsに定義したものを参照する
    super("unhandledrejection");
    this.cause = reason;
    this.code = "";
    this.validationMessages = [];
    this.severity = "critical";
  }
}
