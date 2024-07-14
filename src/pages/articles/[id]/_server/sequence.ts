import type { ParsedUrlQuery } from "node:querystring";
import type { AppServerErrorMessage } from "@/error/const";
import { outputErrorLog } from "@/error/outputErrorLog";
import type {
	GetServerSideProps,
	GetServerSidePropsContext,
	GetServerSidePropsResult,
	PreviewData,
} from "next";
import { transformError } from "./transformError";

export type SequenceOptions<T> = {
	catchError?: (
		e: AppServerErrorMessage,
	) => Promise<GetServerSidePropsResult<T>> | GetServerSidePropsResult<T>;
};

export type DefaultErrorResult = { error: AppServerErrorMessage };

export type BeforeAction<
	Params extends ParsedUrlQuery = ParsedUrlQuery,
	Preview extends PreviewData = PreviewData,
> = (
	context: GetServerSidePropsContext<Params, Preview>,
) => Promise<void> | void;

export function sequence<
	T extends Record<string, unknown>,
	U extends ParsedUrlQuery,
>(
	befores: BeforeAction<U>[],
	action: GetServerSideProps<T, U>,
	options?: SequenceOptions<DefaultErrorResult>,
): GetServerSideProps<T | DefaultErrorResult, U> {
	return async (context) => {
		try {
			for (const action of befores) {
				await action(context);
			}

			const result = await action(context);
			return result;
		} catch (e) {
			const error = transformError(e);
			outputErrorLog(error);
			context.res.statusCode = error.status;
			const result = await (options?.catchError?.(error) ?? {
				props: { error },
			});
			return result;
		}
	};
}

// 別案
// export function _sequence<T extends Record<string, any>, U extends ParsedUrlQuery, V extends Record<string, any> = DefaultErrorResult>(prepares: BeforeAction<U>[], options?: SequenceOptions<V>): (action: GetServerSideProps<T , U>) => GetServerSideProps<T | V, U> {
//   return (action) => {
//     return async (context) => {
//       try {
//         for (const prepare of prepares) {
//           await prepare(context)
//         }

//         const result = await action(context)
//         return result
//       } catch (e) {
//         const result = await (options?.catchError?.(e) ?? { props: { error: e } as unknown as V })
//         return result
//       }
//     }
//   }
// }
