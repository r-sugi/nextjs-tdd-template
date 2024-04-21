import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";
import {
  ResignMemberMutationVariables,
  ResignMemberDocument,
  useGetMembersByStatusLazyQuery,
  useGetActiveMemberLazyQuery,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { transform } from "./activeMember.transformer";
import {
  MemberStatusToMemberMapValue,
  transform as membersByStatusTransform,
} from "./membersByStatus.transformer";
import { MemberStatus } from "@/core/domains/member/status";

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
) => Promise<MemberStatusToMemberMapValue>; // FIXME: 確認する
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
export const updateMemberStatus = async (
  variables: ResignMemberMutationVariables
) => {
  await apiClient<any>(NEXT_PUBLIC_GRAPHQL_URI, {
    method: "POST",
    body: JSON.stringify({
      variables,
      query: print(ResignMemberDocument),
    }),
  });
  // TODO: エラー処理をここに書く（一旦ベタがきで）
  return true;
};
