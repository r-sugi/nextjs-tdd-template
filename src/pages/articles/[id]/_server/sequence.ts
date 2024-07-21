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

export type SequenceBeforeAction<
	Params extends ParsedUrlQuery = ParsedUrlQuery,
	Preview extends PreviewData = PreviewData,
> = (
	context: GetServerSidePropsContext<Params, Preview>,
) => Promise<void> | void;

type ParsedUrlQueryOr<T> = T extends ParsedUrlQuery ? T : ParsedUrlQuery
export type SequenceActionContext<T> = T extends undefined ? GetServerSidePropsContext<ParsedUrlQuery> : Omit<GetServerSidePropsContext, 'params'> & Record<'params', T>
export type SequenceAction<T, U> = (context: SequenceActionContext<U>) => GetServerSidePropsResult<T> | Promise<GetServerSidePropsResult<T>>

/**
 * Generics は GetServerSideProps の Props と Params に紐づく
 * Params が指定されない(= undefined )場合、ParsedUrlQuery が各パラメータに色付けされる
 */
export function sequence<
	Props extends Record<string, unknown>,
	Params = undefined,
>(
	befores: SequenceBeforeAction<ParsedUrlQueryOr<Params>>[],
	action: SequenceAction<Props, Params>,
): GetServerSideProps<Props | DefaultErrorResult, ParsedUrlQueryOr<Params>> {
	return async (context) => {
		try {
			for (const action of befores) {
				await action(context);
			}

			const result = await action(context as SequenceActionContext<Params>);
			return result;
		} catch (e) {
			const error = transformError(e);
			outputErrorLog(error);
			context.res.statusCode = error.status;
			const result = {
				props: { error },
			}
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
