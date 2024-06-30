import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import type { MembersByType } from "@/core/domains/member/member";
import { type MemberStatus, memberStatus } from "@/core/domains/member/status";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import type { ApolloError } from "@apollo/client";

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

type Props = {
	status?: MemberStatus;
};

type MembersState = MembersByType | null | undefined;

export const useFetchMembers = (props?: Props): UseCase<MembersByType> => {
	const [queryMemberStatus, setQueryMemberStatus] = useState<MemberStatus>(
		props?.status ?? memberStatus.pendingActivation,
	);
	const [members, setMembers] = useState<MembersState>(undefined);
	const initMembers = (members: MembersByType | null) =>
		setMembers(members ?? []);
	const query = useFetchMembersByStatus();
	const { notify } = useNotification();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, error } = await query(queryMemberStatus);
			initMembers(data);
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
		})();
	}, [queryMemberStatus]);

	return {
		data: {
			members,
			queryMemberStatus,
		},
		loading: members === undefined,
		refetch: setQueryMemberStatus,
	} as UseCase<MembersByType>;
};
