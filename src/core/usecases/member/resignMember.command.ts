import { memberStatus } from "@/core/domains/member/status";
import { updateMemberStatus } from "@/core/repositories/member/members.repository";

type Props = {
  reasonType: string;
  reasonDetail: string;
  email: string;
};

type Option = {
  onError?: () => Promise<void>;
};

export const resignMember = async (props: Props, opt?: Option) => {
  const res = await updateMemberStatus({
    // TODO: 親子レコードを一回で登録できるようにテーブルを修正する
    // TODO: variablesがanyになっているのを修正する
    activityInput: {
      status: memberStatus.resigned,
      memberId: 'ff4b01ee-15e9-4e2e-acb3-25a0347af7c1', // TODO: ログインメンバーのID
      memberResigned: {
        data: {
          memberId: 'ff4b01ee-15e9-4e2e-acb3-25a0347af7c1', // TODO: ログインメンバーのID
          reasonType: props.reasonType,
          agreement: true,
          email: props.email,
          reasonDetail: props.reasonDetail,
        },
      },
    },
  });
  debugger
  if (!res) {
    opt?.onError?.();
  }
  return res;
};
