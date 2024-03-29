export type ClientErrorObject = {
  message: string;
  code: string;
  cause: string;
  validationMessages: { param: string; messages: string[] }[];
  severity: string;
};

export class ClientError extends Error {
  public code: string;
  public severity: string;
  public cause: string;
  public validationMessages: { param: string; messages: string[] }[];

  constructor(errorJson: ClientErrorObject) {
    super(errorJson.message);
    this.cause = errorJson.cause;
    this.code = errorJson.code;
    this.validationMessages = errorJson.validationMessages;
    this.severity = errorJson.severity;
  }
}
