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
import type { ApolloError } from "@apollo/client";

type Props = {
	status?: MemberStatus;
};

export type FetchMembersReturnType = {
	data: MembersByType | null;
	error: ApolloError | null;
};

type UseCaseLoading = {
	data: {
		members: null;
		queryMemberStatus: MemberStatus;
	};
	error: null;
	loading: true;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UseCaseLoaded<T> = {
	data: {
		members: T;
		queryMemberStatus: MemberStatus;
	};
	error: ApolloError | null;
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
	const [error, setError] = useState<ApolloError | null>(null);

	const query = useFetchMembersByStatus();

	// チラつき防止
	const ref = useRef(error);
	useEffect(() => {
		ref.current = error;
	}, [error]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, error } = await query(queryMemberStatus);
			initMembers(data);
			setError(error);
		})();
	}, [queryMemberStatus]);

	return {
		data: {
			members,
			queryMemberStatus,
		},
		error,
		loading: members === null && error === null,
		refetch: setQueryMemberStatus,
	} as UseCase<MembersByType>;
};
