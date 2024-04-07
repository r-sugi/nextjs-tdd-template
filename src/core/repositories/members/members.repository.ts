import { NEXT_PUBLIC_GRAPHQL_URI } from "@/const/env";
import {
  GetMemberStatusActivitiesTestLatestDocument,
  GetMemberStatusActivitiesTestLatestQueryVariables,
  Member_Status_Activities_Test,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";

// TODO: よりよい型の指定方法があるか検討したい
type FindMemberOneSuccess = {
  data: {
    member_status_activities_test: Array<Member_Status_Activities_Test>;
  };
};

// TODO: where: { eq: $member_id}したいがhasura consoleでエラーになるため、調査中。(一旦statusで実装した)
export const findMembersOne = async (
  variables: GetMemberStatusActivitiesTestLatestQueryVariables
) => {
  const res = await apiClient<FindMemberOneSuccess>(NEXT_PUBLIC_GRAPHQL_URI, {
    method: "POST",
    body: JSON.stringify({
      variables,
      query: print(GetMemberStatusActivitiesTestLatestDocument), // see: https://github.com/apollographql/graphql-tag/issues/144#issuecomment-360861636
    }),
  });
  // TODO: errorsに値が変える場合の処理を追加する
  // TODO: undefinedが返る場合の処理を追加する？
  let data: undefined | Member_Status_Activities_Test = undefined;
  if (res.data.data.member_status_activities_test.length > 0) {
    data = res.data.data.member_status_activities_test[0];
  }
  return {
    data,
  };
};
