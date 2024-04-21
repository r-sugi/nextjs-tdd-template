import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";
import {
  GetActiveMemberDocument,
  GetActiveMemberQueryVariables,
  MemberStatusActivities,
  ResignMemberMutationVariables,
  ResignMemberDocument,
  GetMembersByStatusQueryVariables,
  GetMembersByStatusDocument,
  MemberStatusActivityLatest,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { transform } from "./activeMember.transformer";
import { transform as membersByStatusTransform } from "./membersByStatus.transformer";
import { MemberStatus } from "@/core/domains/member/status";

export type FindMemberOneSuccess = {
  data: {
    memberStatusActivities: Array<MemberStatusActivities>;
  };
};

/**
 * Queries
 */
// TODO: graphQLClient(apiClientをラップした関数を作成する)
export const findActiveMemberOne = async (
  variables: GetActiveMemberQueryVariables
): Promise<ActiveMember | null> => {
  const res = await apiClient<FindMemberOneSuccess>(NEXT_PUBLIC_GRAPHQL_URI, {
    method: "POST",
    body: JSON.stringify({
      variables,
      query: print(GetActiveMemberDocument),
    }),
  });
  // TODO: エラー処理をここに書く（一旦ベタがきで）
  return transform(res);
};

export type FetchMembersByStatusSuccess = {
  data: {
    memberStatusActivityLatest: Array<MemberStatusActivityLatest>;
  };
};

// TODO: graphQLClient(apiClientをラップした関数を作成する)
export const fetchMembersByStatus = async (
  variables: GetMembersByStatusQueryVariables
): Promise<any> => {
  const res = await apiClient<FetchMembersByStatusSuccess>(
    NEXT_PUBLIC_GRAPHQL_URI,
    {
      method: "POST",
      body: JSON.stringify({
        variables,
        query: print(GetMembersByStatusDocument),
      }),
    }
  );
  // TODO: エラー処理をここに書く（一旦ベタがきで）
  // TODO: statusの型キャストをやめれるか？
  return membersByStatusTransform(res, variables.status as MemberStatus);
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
