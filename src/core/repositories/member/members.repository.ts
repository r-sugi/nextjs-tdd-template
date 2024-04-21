import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";
import {
  ResignMemberMutationVariables,
  ResignMemberDocument,
  useGetMembersByStatusLazyQuery,
  MemberStatusActivityLatest,
  useGetActiveMemberLazyQuery,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { transform } from "./activeMember.transformer";
import { transform as membersByStatusTransform } from "./membersByStatus.transformer";
import { MemberStatus } from "@/core/domains/member/status";

/**
 * Queries
 */
// TODO: キャッシュしたかったらoptionsを渡す
type Return = (memberId: string) => Promise<ActiveMember | null>;

export const useFindActiveMemberOne = (): Return => {
  const [query] = useGetActiveMemberLazyQuery();

  return async (memberId) => {
    const res = await query({ variables: { memberId } });
    // TODO: エラー処理をここに書く（一旦ベタがきで）
    return transform(res);
  };
};

type Return2 = (status: MemberStatus) => Promise<any>;
export const useFetchMembersByStatus = (): Return2 => {
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
