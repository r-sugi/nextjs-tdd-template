import { ActiveMember } from "@/core/domains/member/activeMember";
import { memberStatus } from "@/core/domains/member/status";
import { MemberActive } from "@/generated/graphql";
import { GetActiveMemberQueryResult } from "@/generated/graphql";

export const transform = (
  res: GetActiveMemberQueryResult
): ActiveMember | null => {
  if (res.data == null) {
    return null;
  } else if (res.data.memberStatusActivityLatest.length === 0) {
    return null;
  } else if (res.data.memberStatusActivityLatest[0] == null) {
    return null;
  }
  const responseActiveMember = res.data
    .memberStatusActivityLatest[0] as MemberActive;

  const activeMember: ActiveMember = {
    ...responseActiveMember,
    status: memberStatus.active,
    createdAt: new Date(responseActiveMember.createdAt),
    birthday: new Date(responseActiveMember.birthday),
  };

  return activeMember;
};
