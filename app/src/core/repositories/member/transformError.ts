import type { AppErrorMessage } from "@/error/const";
import { transformApolloError } from "@/error/transform/apollo/transform";
import { transformUnexpectedError } from "@/error/transform/unexpected/transform";
import { ApolloError } from "@apollo/client";

export const transformError = (error: unknown): AppErrorMessage => {
	if (error instanceof ApolloError) {
		const res = transformApolloError(error);
		if (res) return res;
	}
	return transformUnexpectedError(error);
};
