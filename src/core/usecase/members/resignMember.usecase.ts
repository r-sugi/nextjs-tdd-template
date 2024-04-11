import { MemberStatus } from "@/core/domain/value/memberStatus.value";
import MemberRepository from "@/core/repository/members/members.repository";

// TODO: useXXXにしたらuseStateとか使えるようになる。hooksにした方が良い？
// TODO: 退会理由: ユーザーが選択した選択肢(例: "利用しないため")
export const resignMember = async ({ reason }: { reason: string }) => {
  const res = await new MemberRepository().resignMember({
    activity_input: {
      status: MemberStatus.Resigned,
      member_id: 1, // TODO: ログインメンバーのID
      member_resigns: {
        data: [
          {
            member_id: 1, // TODO: ログインメンバーのID
            reason,
            // TODO: テーブルに退会理由詳細、同意フラグのカラムを追加する
          },
        ],
      },
    },
  });
  if (!res) {
    // TODO: error処理
    throw new Error("failed to resign");
  }
  return res;
};
