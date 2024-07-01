import type { MemberStatus } from "@/core/domains/member/status";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { MembersByType } from "@/core/domains/member/member";
import type { AppErrorMessage } from "@/error/const";
import {
	type ResignMemberMutationVariables,
	useResignMemberMutation,
} from "./graphql/MutationResignMember.generated";
import { useGetActiveMemberLazyQuery } from "./graphql/QueryActiveMember.generated";
import { useGetMembersByStatusLazyQuery } from "./graphql/QueryMembersByStatus.generated";
import { transformError } from "./transformError";
import { transform } from "./transformer/activeMember.transformer";
import { transform as membersByStatusTransform } from "./transformer/membersByStatus.transformer";
import { resignMemberTransform } from "./transformer/resignMember.transformer";

/**
 * Queries
 */
type FetchActiveMemberReturnType = {
	data: ActiveMember | null;
	error: AppErrorMessage | null;
};
type FindActiveMemberOneType = (
	memberId: string,
) => Promise<FetchActiveMemberReturnType>;

export const useFindActiveMemberOne = (): FindActiveMemberOneType => {
	const [query] = useGetActiveMemberLazyQuery();

	return async (memberId) => {
		try {
			const res = await query({ variables: { memberId } });
			const member = transform(res);
			return { data: member, error: null };
		} catch (error) {
			return { data: null, error: transformError(error) };
		}
	};
};

type FetchMembersReturnType = {
	data: MembersByType | null;
	error: AppErrorMessage | null;
};

type FetchMembersByStatusType = (
	status: MemberStatus,
) => Promise<FetchMembersReturnType>;

export const useFetchMembersByStatus = (): FetchMembersByStatusType => {
	const [query] = useGetMembersByStatusLazyQuery();

	return async (status) => {
		try {
			const res = await query({ variables: { status } });
			const members = membersByStatusTransform(res, status);
			return { data: members, error: null };
		} catch (error: unknown) {
			return { data: null, error: transformError(error) };
		}
	};
};

/**
 * Mutations
 */
type UseUpdateMemberStatusType = {
	data: UpdateMemberStatusInputType["activityInput"] | null;
	error: AppErrorMessage | null;
};

export type UpdateMemberStatusInputType = {
	activityInput: {
		status: MemberStatus;
		memberId: string;
		memberResigned: {
			data: {
				memberId: string;
				reasonType: string;
				agreement: boolean;
				reasonDetail: string | null;
			};
		};
	};
};

type UpdateMemberStatusType = (
	variables: UpdateMemberStatusInputType,
) => Promise<UseUpdateMemberStatusType>;
export const useUpdateMemberStatus = (): UpdateMemberStatusType => {
	const [mutate] = useResignMemberMutation();

	return async (variables: ResignMemberMutationVariables) => {
		try {
			const res = await mutate({ variables });
			return { data: resignMemberTransform(res), error: null };
		} catch (error) {
			return { data: null, error: transformError(error) };
		}
	};
};
