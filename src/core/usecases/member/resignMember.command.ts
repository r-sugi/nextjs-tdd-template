import { memberStatus } from "@/core/domains/member/status";
import { updateMemberStatus } from "@/core/repositories/member/members.repository";

// TODO: 退会理由: ユーザーが選択した選択肢(例: "利用しないため")
type Props = {
  reason_type: string;
  reason: string;
  reason_detail: string;
};

type Option = {
  onError?: () => Promise<void>;
};

export const resignMember = async (props: Props, opt?: Option) => {
  const res = await updateMemberStatus({
    activity_input: {
      status: memberStatus.resigned,
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
    opt?.onError?.();
  }
  return res;
};
