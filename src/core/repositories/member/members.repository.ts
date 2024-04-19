import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";
import {
  GetActiveMemberDocument,
  GetActiveMemberQueryVariables,
  MemberStatusActivities,
  ResignMemberMutationVariables,
  ResignMemberDocument,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { transform } from "./activeMember.transformer";

export type FindMemberOneSuccess = {
  data: {
    memberStatusActivities: Array<MemberStatusActivities>;
  };
};

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
