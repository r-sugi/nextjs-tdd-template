import {
	type Dispatch,
	type SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";

import type { MembersByType } from "@/core/domains/member/member";
import { type MemberStatus, memberStatus } from "@/core/domains/member/status";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import type { GraphQLErrors } from "@apollo/client/errors";

type Props = {
	status?: MemberStatus;
};

export type FetchMembersReturnType = {
	data: MembersByType | null;
	errors: GraphQLErrors | null;
};

type UseCaseLoading = {
	data: {
		members: null;
		queryMemberStatus: MemberStatus;
	};
	errors: null;
	loading: true;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UseCaseLoaded<T> = {
	data: {
		members: T;
		queryMemberStatus: MemberStatus;
	};
	errors: GraphQLErrors | null;
	loading: false;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UseCase<T> = UseCaseLoading | UseCaseLoaded<T>;

export const useFetchMembers = (props?: Props): UseCase<MembersByType> => {
	const [queryMemberStatus, setQueryMemberStatus] = useState<MemberStatus>(
		props?.status ?? memberStatus.pendingActivation,
	);
	const [members, setMembers] = useState<MembersByType | null>(null);
	const initMembers = (members: MembersByType | null) =>
		setMembers(members ?? []);
	const [errors, setErrors] = useState<GraphQLErrors | null>(null);

	const query = useFetchMembersByStatus();

	// チラつき防止
	const ref = useRef(errors);
	useEffect(() => {
		ref.current = errors;
	}, [errors]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, errors } = await query(queryMemberStatus);
			initMembers(data);
			setErrors(errors);
		})();
	}, [queryMemberStatus]);

	return {
		data: {
			members,
			queryMemberStatus,
		},
		errors,
		loading: members === null && errors === null,
		refetch: setQueryMemberStatus,
	} as UseCase<MembersByType>;
};
