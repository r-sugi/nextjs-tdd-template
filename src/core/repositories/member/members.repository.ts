import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { MembersByType } from "@/core/domains/member/member";
import type { MemberStatus } from "@/core/domains/member/status";
import type { UpdateMemberStatusInputType } from "@/core/usecases/member/useResignMember.command";
import {
	type ResignMemberMutationVariables,
	useGetActiveMemberLazyQuery,
	useGetMembersByStatusLazyQuery,
	useResignMemberMutation,
} from "@/generated/graphql";

import { transform } from "./transformer/activeMember.transformer";
import { transform as membersByStatusTransform } from "./transformer/membersByStatus.transformer";

/**
 * Queries
 */
// TODO: キャッシュしたかったらoptionsを渡す
type FindActiveMemberOneType = (
	memberId: string,
) => Promise<ActiveMember | null>;
export const useFindActiveMemberOne = (): FindActiveMemberOneType => {
	const [query] = useGetActiveMemberLazyQuery();

	return async (memberId) => {
		const res = await query({ variables: { memberId } });
		// TODO: エラー処理をここに書く（一旦ベタがきで）
		return transform(res);
	};
};

type FetchMembersByStatusType = (
	status: MemberStatus,
) => Promise<MembersByType>; // FIXME: 依存型の確認

export const useFetchMembersByStatus = (): FetchMembersByStatusType => {
	const [query] = useGetMembersByStatusLazyQuery();

	return async (status) => {
		const res = await query({ variables: { status } });
		// TODO: エラー処理をここに書く（一旦ベタがきで）
		return membersByStatusTransform(res, status);
	};
};

/**
 * Mutations
 */
type UpdateMemberStatusType = (
	variables: UpdateMemberStatusInputType, // FIXME: 依存型の確認
) => Promise<boolean>;
export const useUpdateMemberStatus = (): UpdateMemberStatusType => {
	const [mutate] = useResignMemberMutation();

	return async (variables: ResignMemberMutationVariables) => {
		const { data, errors, extensions } = await mutate({ variables });
		debugger;
		// TODO: エラー処理をここに書く（一旦ベタがきで）
		return !!data;
	};
};
