import { useEffect, useRef, useState } from "react";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import { apolloQueryErrorHandler } from "@/core/repositories/apolloQueryErrorHandler";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { ApolloError, type GraphQLErrors } from "@apollo/client/errors";

type UsecaseLoading = {
	data: null;
	error: GraphQLErrors | null;
	loading: true;
} & Record<string, unknown>;

type UsecaseLoaded<T> = {
	data: T;
	error: GraphQLErrors | null;
	loading: false;
} & Record<string, unknown>;

type Usecase<T> = UsecaseLoading | UsecaseLoaded<T>;

export const useFetchActiveMember = (): Usecase<ActiveMember> => {
	const [activeMember, setActiveMember] = useState<ActiveMember | null>(null);
	const query = useFindActiveMemberOne();
	const [error, setError] = useState<GraphQLErrors | null>(null);

	// チラつき防止
	const ref = useRef(error);
	useEffect(() => {
		ref.current = error;
	}, [error]);

	useEffect(() => {
		(async () => {
			try {
				const state = await query(
					// TODO: 動的な値(JWTから取得したもの)
					"ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
				);
				state && setActiveMember(state);
			} catch (error: unknown) {
				if (error instanceof ApolloError) {
					setError(apolloQueryErrorHandler(error));
				}
			}
		})();
	}, [query]);

	return {
		data: activeMember,
		error,
		loading: activeMember === null,
	} as Usecase<ActiveMember>;
};
