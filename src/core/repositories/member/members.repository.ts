import type { MemberStatus } from "@/core/domains/member/status";
import type {
	UpdateMemberStatusInputType,
	UseResignMemberReturnType,
} from "@/core/usecases/member/useResignMember.command";
import {
	type ResignMemberMutationVariables,
	useGetActiveMemberLazyQuery,
	useGetMembersByStatusLazyQuery,
	useResignMemberMutation,
} from "@/generated/graphql";

import type { FetchActiveMemberReturnType } from "@/core/usecases/member/useFetchActiveMember.query";
import type { FetchMembersReturnType } from "@/core/usecases/member/useFetchMembers.query";
import { ApolloError } from "@apollo/client";

import { transform } from "./transformer/activeMember.transformer";
import { transform as membersByStatusTransform } from "./transformer/membersByStatus.transformer";
import { resignMemberTransform } from "./transformer/resignMember.transformer";

/**
 * Queries
 */
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
			if (error instanceof ApolloError) {
				return { data: null, error };
			}
			return { data: null, error: null };
		}
	};
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
			if (error instanceof ApolloError) {
				return { data: null, error };
			}
			return { data: null, error: null };
		}
	};
};
