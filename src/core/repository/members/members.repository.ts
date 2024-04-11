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
import ActiveMemberEntity from "@/core/domain/entity/activeMember.entity";
import MemberFactory from "./member.factory";
import { IMemberRepository } from "@/core/domain/repositoyInterface/members.repository.interface";

// TODO: よりよい型の指定方法があるか検討したい
type FindMemberOneSuccess = {
  data: {
    member_status_activities_test: Array<Member_Status_Activities_Test>;
  };
};

class Repository<T> {
  // TODO: 一旦空にしている。内部でapiClientを使うメソッドを定義するイメージ?
  // TODO: errorsに値が変える場合の処理を追加する(Repository<T> 側に定義すべき？)
}

export default class MemberRepository
  extends Repository<ActiveMemberEntity>
  implements IMemberRepository
{
  async findActiveMemberOne(variables: GetActiveMemberQueryVariables) {
    const res = await apiClient<FindMemberOneSuccess>(NEXT_PUBLIC_GRAPHQL_URI, {
      method: "POST",
      body: JSON.stringify({
        variables,
        query: print(GetActiveMemberDocument),
      }),
    });

    // TODO: エラー処理

    // 存在しない場合はnullを返す
    if (res.data.data.member_status_activities_test.length === 0) {
      return null;
    } else if (
      res.data.data.member_status_activities_test[0].member_active == null
    ) {
      return null;
    }

    const activeMember =
      res.data.data.member_status_activities_test[0].member_active;

    // TODO: カラム名はキャピタルケースの方がよかった。
    const params = {
      statusActivityId: activeMember.status_activity_id,
      memberId: activeMember.member_id,
      address: activeMember.address,
      postalCode: activeMember.postal_code,
      birthday: activeMember.birthday,
      createdAt: activeMember.created_at,
    };

    // 存在する場合はインスタンスを生成して返す
    return new MemberFactory().createActiveMember(params);
  }

  async resignMember(variables: ResignMemberMutationVariables) {
    await apiClient<any>(NEXT_PUBLIC_GRAPHQL_URI, {
      method: "POST",
      body: JSON.stringify({
        variables,
        query: print(ResignMemberDocument),
      }),
    });

    return true;
  }
}
