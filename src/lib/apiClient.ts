import { ErrorResponse, HttpError } from "@/error/errors/httpError";

export type DataResponse<T> = {
  data: T;
  error: undefined;
  status: number;
  statusText: string;
  headers?: Headers;
};

export type HttpResponse<T> = DataResponse<T>;

function transformResponse<T>() {
  return async (response: Response): Promise<HttpResponse<T>> => {
    const json = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error: ErrorResponse = {
        data: undefined,
        error: {
          errors: json.errors,
          message: json.message,
        },
        status: response.status,
        statusText: response.statusText,
        // TODO: severity: "fatal" | "critical" | "error" | "warning" | "info" | "debug" | "trace"
      };
      throw new HttpError(error);
    }

    const data: T = { ...json };

    return {
      data,
      error: undefined,
      headers: response.headers,
      status: response.status,
      statusText: response.statusText,
    };
  };
}

export async function apiClient<T>(
  input: RequestInfo | URL,
  config?: RequestInit | undefined
): Promise<HttpResponse<T>> {
  return fetch(input, config).then(transformResponse<T>());
}
