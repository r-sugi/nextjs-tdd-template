import { memberStatus } from "@/core/domains/member/status";
import { updateMemberStatus } from "@/core/repositories/member/members.repository";

type Props = {
  reasonType: string;
  reasonDetail: string | null;
  agreement: boolean;
};

type Option = {
  onError?: () => Promise<void>;
};

export const resignMember = async (props: Props, opt?: Option) => {
  const res = await updateMemberStatus({
    // TODO: variablesがanyになっているのを修正する
    activityInput: {
      status: memberStatus.resigned,
      memberId: "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1", // TODO: ログインメンバーのID
      memberResigned: {
        data: {
          memberId: "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1", // TODO: ログインメンバーのID
          reasonType: props.reasonType,
          agreement: props.agreement,
          reasonDetail: props.reasonDetail,
        },
      },
    },
  });
  if (!res) {
    opt?.onError?.();
  }
  return res;
};
