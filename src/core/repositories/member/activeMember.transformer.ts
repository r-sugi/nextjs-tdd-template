import { HttpResponse } from "@/lib/apiClient";
import { FindMemberOneSuccess } from "./members.repository";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { memberStatus } from "@/core/domains/member/status";
import { MemberActive } from "@/generated/graphql";

type Response = HttpResponse<FindMemberOneSuccess>;

export const transform = (res: Response): ActiveMember | null => {
  if (res.data.data.memberStatusActivityLatest.length === 0) {
    return null;
  } else if (res.data.data.memberStatusActivityLatest[0] == null) {
    return null;
  }
  const responseActiveMember = res.data.data
    .memberStatusActivityLatest[0] as MemberActive;

  const activeMember: ActiveMember = {
    ...responseActiveMember,
    status: memberStatus.active,
    createdAt: new Date(responseActiveMember.createdAt ?? ""),
    birthday: new Date(responseActiveMember.birthday ?? ""),
  };

  return activeMember;
};
