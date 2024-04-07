import { NEXT_PUBLIC_GRAPHQL_URI } from "@/const/env";
import {
  GetMemberStatusActivitiesTestLatestDocument,
  GetMemberStatusActivitiesTestLatestQueryVariables,
  Member_Status_Activities_Test,
} from "@/generated/graphql";
import { apiClient } from "@/lib/apiClient";
import { print } from "graphql/language/printer";
import { IMemberRepository } from "../../domain/repositoy-interface/members.repository.interface";
import MemberEntity from "@/core/domain/entity/MemberEntity";
import MemberFactory from "./member.factory";
import { CamelConverter } from "@/utils/camelConverter";

type Member_Status_Activities_Test_Object = Extract<
  Member_Status_Activities_Test,
  "__typename"
>;

// TODO: よりよい型の指定方法があるか検討したい
type FindMemberOneSuccess = {
  data: {
    member_status_activities_test: Array<Member_Status_Activities_Test_Object>;
  };
};

class Repository<T> {
  // TODO: 一旦空にしているが、共通処理を追加する。よくわからん。内部でapiClientを使うメソッドを定義する？
}

// TODO: 一旦statusで実装した(where: { eq: $member_id}したいがhasura consoleでエラーになる。解消したい)
export default class MemberRepository
  extends Repository<MemberEntity>
  implements IMemberRepository
{
  async findMemberOne(
    variables: GetMemberStatusActivitiesTestLatestQueryVariables
  ) {
    const res = await apiClient<FindMemberOneSuccess>(NEXT_PUBLIC_GRAPHQL_URI, {
      method: "POST",
      body: JSON.stringify({
        variables,
        query: print(GetMemberStatusActivitiesTestLatestDocument), // see: https://github.com/apollographql/graphql-tag/issues/144#issuecomment-360861636
      }),
    });
    // TODO: errorsに値が変える場合の処理を追加する
    // TODO: undefinedが返る場合の処理を追加する？
    let data: undefined | Member_Status_Activities_Test_Object = undefined;
    if (res.data.data.member_status_activities_test.length > 0) {
      data = res.data.data.member_status_activities_test[0];
    }
    if (!data) return undefined;
    const memberFactory = new MemberFactory();

    return memberFactory.createActiveMember(CamelConverter.convert(data));
  }
}
