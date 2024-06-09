import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { MembersByType } from "@/core/domains/member/member";
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
import type { GraphQLErrors } from "@apollo/client/errors";
import { apolloMutationErrorHandler } from "../apolloMutationErrorHandler";
import { apolloQueryErrorHandler } from "../apolloQueryErrorHandler";
import { transform } from "./transformer/activeMember.transformer";
import { transform as membersByStatusTransform } from "./transformer/membersByStatus.transformer";

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
			return { data: member, errors: null };
		} catch (error) {
			if (error instanceof ApolloError) {
				const errors = apolloQueryErrorHandler(error);
				return { data: null, errors };
			}
			return { data: null, errors: null };
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
			return { data: members, errors: null };
		} catch (error) {
			if (error instanceof ApolloError) {
				const errors = apolloQueryErrorHandler(error);
				return { data: null, errors };
			}
			return { data: null, errors: null };
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
			// TODO: dataを返すようにしたい
			return { data: !!res.data, errors: null };
		} catch (error) {
			if (error instanceof ApolloError) {
				return { data: false, errors: apolloMutationErrorHandler(error) };
			}
			return { data: false, errors: null };
		}
	};
};
