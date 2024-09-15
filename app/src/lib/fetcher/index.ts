import {
	type ErrorResponse,
	HttpError,
} from "app/src/error/transform/http/HttpError";

type TransformedData<T> = {
	data: T;
	status: number;
	statusText: string;
	headers?: Headers;
};

type Success<T> = {
	response: TransformedData<T>;
};

type Failure = {
	error: HttpError;
};

type HttpResponse<T> = Success<T> | Failure;

function transformResponse<T>() {
	return async (response: Response): Promise<HttpResponse<T>> => {
		const json = await response.json().catch(() => ({}));
		if (!response.ok) {
			const error: ErrorResponse = {
				data: undefined,
				error: {
					message: json.message,
					errors: json.errors,
				},
				status: response.status,
				statusText: response.statusText,
				headers: response.headers,
			};
			return { error: new HttpError(error) };
		}
		const data: T = json;

		return {
			response: {
				data,
				status: response.status,
				statusText: response.statusText,
				headers: response.headers,
			},
		};
	};
}

export async function fetcher<T>(
	input: RequestInfo | URL,
	config?: RequestInit | undefined,
): Promise<HttpResponse<T>> {
	return fetch(input, config).then(transformResponse<T>());
}
