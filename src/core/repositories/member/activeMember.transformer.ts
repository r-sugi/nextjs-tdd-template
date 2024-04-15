import { HttpResponse } from "@/lib/apiClient";
import { FindMemberOneSuccess } from "./members.repository";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { memberStatus } from "@/core/domains/member/status";

type Response = HttpResponse<FindMemberOneSuccess>;

export const transform = (res: Response): ActiveMember | null => {
  if (res.data.data.memberStatusActivities.length === 0) {
    return null;
  } else if (
    res.data.data.memberStatusActivities[0].memberActive == null
  ) {
    return null;
  }
  const responseActiveMember =
    res.data.data.memberStatusActivities[0].memberActive;

  const activeMember: ActiveMember = {
    status: memberStatus.active,
    ...responseActiveMember
  };

  return activeMember;
};
