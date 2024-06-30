import { APP_ERROR, type AppErrorMessage } from "@/error/const";
import { ApolloError } from "@apollo/client";

export const transformApolloError = (error: unknown): AppErrorMessage => {
	if (error instanceof ApolloError) {
		return APP_ERROR.SYSTEM.UNRECOVERABLE.EE99;
	}
	return APP_ERROR.SYSTEM.UNRECOVERABLE.EE99;
};
