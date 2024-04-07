import { GetMemberStatusActivitiesTestLatestQueryVariables } from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";

export const findMembersOne = async (
  variables: GetMemberStatusActivitiesTestLatestQueryVariables
) => {
  // TODO: 返り値の型をアサーションする
  // TODO: where: { eq: $member_id}したいがhasura consoleでエラーになるため、調査中。(一旦statusで実装した)
  const res = await apiClient(`http://localhost:8080/v1/graphql`, {
    method: "POST",
    body: JSON.stringify({
      variables,
      // TODO: 型からクエリ文字列を生成する
      query: `
        query GetMemberStatusActivitiesTestLatest($status: String!) {
          member_status_activities_test(
            order_by: {created_at: desc},
            limit: 1,
            where: { status: { _eq: $status}}
          ) {
            created_at
            member_id
            status
            id
          }
        }
    `,
    }),
  });
  console.log(res.data.data.member_status_activities_test[0]);
  return {
    data: res.data,
  };
};
