import { useEffect, useRef, useState } from "react";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import type { ApolloError } from "@apollo/client/errors";

export type FetchActiveMemberReturnType = {
	data: ActiveMember | null;
	error: ApolloError | null;
};

type UseCaseLoading = {
	data: null;
	error: null;
	loading: true;
} & Record<string, unknown>;

type UseCaseLoaded<T> = {
	data: T | null;
	error: ApolloError | null;
	loading: false;
} & Record<string, unknown>;

type UseCase<T> = UseCaseLoading | UseCaseLoaded<T>;

export const useFetchActiveMember = (): UseCase<ActiveMember> => {
	const [activeMember, setActiveMember] = useState<ActiveMember | null>(null);
	const [error, setError] = useState<ApolloError | null>(null);
	const query = useFindActiveMemberOne();

	// チラつき防止
	const ref = useRef(error);
	useEffect(() => {
		ref.current = error;
	}, [error]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, error } = await query(
				// TODO: 動的な値(JWTから取得したもの)
				"ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
			);
			setActiveMember(data);
			setError(error);
		})();
	}, []);

	return {
		data: activeMember,
		error,
		loading: activeMember === null && error === null,
	} as UseCase<ActiveMember>;
};
