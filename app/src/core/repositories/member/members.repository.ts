import type { MemberStatus } from "app/src/core/domains/member/status";
import {
	type ResignMemberMutationVariables,
	useGetActiveMemberLazyQuery,
	useGetAllMembersLazyQuery,
	useGetMembersByStatusLazyQuery,
	useResignMemberMutation,
} from "app/src/generated/graphql";

import type { ActiveMember } from "app/src/core/domains/member/activeMember";
import type {
	AllMembers,
	MembersByType,
} from "app/src/core/domains/member/member";
import type { AppErrorMessage } from "app/src/error/const";
import { transformError } from "./transformError";
import { transform } from "./transformer/activeMember.transformer";
import { transform as transformAllMembers } from "./transformer/allMembers.transformer";
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

type FetchAllMembers = () => Promise<FetchAllMembersReturnType>;

type FetchAllMembersReturnType = {
	data: AllMembers | null;
	error: AppErrorMessage | null;
};

export const useFetchMembersAll = (): FetchAllMembers => {
	const [query] = useGetAllMembersLazyQuery();

	return async () => {
		try {
			const res = await query();
			const members = transformAllMembers(res);
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
