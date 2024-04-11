import { MemberStatus } from "@/core/domain/value/memberStatus.value";
import MemberRepository from "@/core/repository/members/members.repository";

// TODO: useXXXにしたらuseStateとか使えるようになる。hooksにした方が良い？
// TODO: 退会理由: ユーザーが選択した選択肢(例: "利用しないため")
type Props = {
  reason_type: string;
  reason: string;
  reason_detail: string;
};

export const resignMember = async (props: Props) => {
  // TODO: ResignMemberForm.entityを経由してrepositoryに値を渡す？(フォームで行ったような値のバリデーションを再度行う？)
  const res = await new MemberRepository().resignMember({
    activity_input: {
      status: MemberStatus.Resigned,
      member_id: 1, // TODO: ログインメンバーのID
      member_resign: {
        data: {
          member_id: 1, // TODO: ログインメンバーのID
          reason: props.reason,
          agreement: true,
          reason_detail: props.reason_detail,
          reason_type: props.reason_type,
        },
      },
    },
  });
  if (!res) {
    // TODO: error処理
    throw new Error("failed to resign");
  }
  return res;
};
