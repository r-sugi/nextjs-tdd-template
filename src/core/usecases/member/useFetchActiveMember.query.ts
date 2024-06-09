import { useEffect, useRef, useState } from "react";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import type { GraphQLErrors } from "@apollo/client/errors";

export type FetchActiveMemberReturnType = {
	data: ActiveMember | null;
	errors: GraphQLErrors | null;
};

type UseCaseLoading = {
	data: null;
	errors: null;
	loading: true;
} & Record<string, unknown>;

type UseCaseLoaded<T> = {
	data: T | null;
	errors: GraphQLErrors | null;
	loading: false;
} & Record<string, unknown>;

type UseCase<T> = UseCaseLoading | UseCaseLoaded<T>;

export const useFetchActiveMember = (): UseCase<ActiveMember> => {
	const [activeMember, setActiveMember] = useState<ActiveMember | null>(null);
	const [errors, setErrors] = useState<GraphQLErrors | null>(null);
	const query = useFindActiveMemberOne();

	// チラつき防止
	const ref = useRef(errors);
	useEffect(() => {
		ref.current = errors;
	}, [errors]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, errors } = await query(
				// TODO: 動的な値(JWTから取得したもの)
				"ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
			);
			setActiveMember(data);
			setErrors(errors);
		})();
	}, []);

	return {
		data: activeMember,
		errors,
		loading: activeMember === null && errors === null,
	} as UseCase<ActiveMember>;
};
