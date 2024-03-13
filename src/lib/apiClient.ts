import { ErrorResponse, HttpError } from "@/error/errors/httpError";

export type DataResponse<T> = {
  data: T;
  error: undefined;
  status: number;
  statusText: string;
  headers?: Headers;
};

export type HttpResponse<T> = DataResponse<T> | ErrorResponse;

function transformResponse<T>(throwError = true) {
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
      };
      if (throwError) {
        throw new HttpError(error);
      }
      return error;
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
  config?:
    | (RequestInit & {
        throwErrors?: boolean;
      })
    | undefined
): Promise<HttpResponse<T>> {
  const throwErrors = config?.throwErrors ?? true;
  return fetch(input, config).then(transformResponse<T>(throwErrors));
}
