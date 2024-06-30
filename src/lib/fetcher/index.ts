import {
	type ErrorResponse,
	HttpError,
} from "@/error/transform/http/HttpError";

type DataResponse<T> = {
	data: T;
	error: undefined;
	status: number;
	statusText: string;
	headers?: Headers;
};

type HttpResponse<T> = DataResponse<T>;

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
			throw new HttpError(error);
		}
		const data: T = json;

		return {
			data,
			error: undefined,
			headers: response.headers,
			status: response.status,
			statusText: response.statusText,
		};
	};
}

export async function fetcher<T>(
	input: RequestInfo | URL,
	config?: RequestInit | undefined,
): Promise<HttpResponse<T>> {
	return fetch(input, config).then(transformResponse<T>());
}
