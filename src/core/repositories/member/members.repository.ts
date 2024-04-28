import { ActiveMember } from "@/core/domains/member/activeMember";
import { MembersByType } from "@/core/domains/member/member";
import { MemberStatus } from "@/core/domains/member/status";
import { UpdateMemberStatusInputType } from "@/core/usecases/member/useResignMember.command";
import {
  ResignMemberMutationVariables,
  useGetMembersByStatusLazyQuery,
  useGetActiveMemberLazyQuery,
  useResignMemberMutation,
} from "@/generated/graphql";

import { transform } from "./activeMember.transformer";
import { transform as membersByStatusTransform } from "./membersByStatus.transformer";


/**
 * Queries
 */
// TODO: キャッシュしたかったらoptionsを渡す
type FindActiveMemberOneType = (
  memberId: string
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
  status: MemberStatus
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
  input: UpdateMemberStatusInputType // FIXME: 依存型の確認
) => Promise<boolean>;
export const useUpdateMemberStatus = (): UpdateMemberStatusType => {
  const [mutate] = useResignMemberMutation();

  return async (input: ResignMemberMutationVariables) => {
    const res = await mutate({ variables: input });
    // TODO: エラー処理をここに書く（一旦ベタがきで）
    return !!res;
  };
};
