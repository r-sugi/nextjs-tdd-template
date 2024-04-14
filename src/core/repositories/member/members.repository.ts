import { NEXT_PUBLIC_GRAPHQL_URI } from "@/const/env";
import {
  GetActiveMemberDocument,
  GetActiveMemberQueryVariables,
  Member_Status_Activities_Test,
  ResignMemberMutationVariables,
  ResignMemberDocument,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { transform } from "./activeMember.transformer";

// TODO: よりよい型の指定方法があるか検討したい
// TODO: graphQLClient(apiClientをラップした関数｀を作成する)
export type FindMemberOneSuccess = {
  data: {
    member_status_activities_test: Array<Member_Status_Activities_Test>;
  };
};

export const findActiveMemberOne = async (
  variables: GetActiveMemberQueryVariables
): Promise<ActiveMember | null> => {
  // TODO: graphQLClient(apiClientをラップした関数を作成する)
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
