import { ApolloError } from "@apollo/client";
import type { AppErrorMessage } from "app/src/error/const";
import { transformApolloError } from "app/src/error/transform/apollo/transform";
import { transformUnexpectedError } from "app/src/error/transform/unexpected/transform";

export const transformError = (error: unknown): AppErrorMessage => {
	if (error instanceof ApolloError) {
		const res = transformApolloError(error);
		if (res) return res;
	}
	return transformUnexpectedError(error);
};
