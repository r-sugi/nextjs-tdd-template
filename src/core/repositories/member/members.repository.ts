import type { MemberStatus } from "@/core/domains/member/status";
import {
	type ResignMemberMutationVariables,
	useGetActiveMemberLazyQuery,
	useGetMembersByStatusLazyQuery,
	useResignMemberMutation,
} from "@/generated/graphql";

import { ApolloError } from "@apollo/client";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { MembersByType } from "@/core/domains/member/member";
import { transform } from "./transformer/activeMember.transformer";
import { transform as membersByStatusTransform } from "./transformer/membersByStatus.transformer";
import { resignMemberTransform } from "./transformer/resignMember.transformer";

/**
 * Queries
 */
type FetchActiveMemberReturnType = {
	data: ActiveMember | null;
	error: ApolloError | null;
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
			// TODO: loggerでstacktraceを出力させる(view名 -> UseCase名をログに出力させたい)
			if (error instanceof ApolloError) {
				return { data: null, error };
			}
			return { data: null, error: null };
		}
	};
};

type FetchMembersReturnType = {
	data: MembersByType | null;
	error: ApolloError | null;
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
		} catch (error) {
			// TODO: loggerでstacktraceを出力させる(view名 -> UseCase名をログに出力させたい)
			if (error instanceof ApolloError) {
				return { data: null, error };
			}
			return { data: null, error: null };
		}
	};
};

/**
 * Mutations
 */
export type UseResignMemberReturnType = {
	data: UpdateMemberStatusInputType["activityInput"] | null;
	error: ApolloError | null;
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
) => Promise<UseResignMemberReturnType>;
export const useUpdateMemberStatus = (): UpdateMemberStatusType => {
	const [mutate] = useResignMemberMutation();

	return async (variables: ResignMemberMutationVariables) => {
		try {
			const res = await mutate({ variables });
			return { data: resignMemberTransform(res), error: null };
		} catch (error) {
			// TODO: loggerでstacktraceを出力させる(view名 -> UseCase名をログに出力させたい)
			if (error instanceof ApolloError) {
				return { data: null, error };
			}
			return { data: null, error: null };
		}
	};
};
