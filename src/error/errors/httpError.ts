type ErrorResponse = {
  data: undefined;
  error: {
    message: string;
    errors?: { code: string; message: string; name: string }[];
  };
  status: number;
  statusText: string;
  headers?: Headers;
};

export class HttpError extends Error {
  public data: undefined;
  public error: ErrorResponse["error"];
  public status: number;
  public statusText: string;

  constructor(response: ErrorResponse) {
    super(response.statusText);
    this.data = response.data;
    this.error = response.error;
    this.status = response.status;
    this.statusText = response.statusText;
  }
}
