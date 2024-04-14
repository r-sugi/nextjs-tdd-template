import { HttpResponse } from "@/lib/apiClient";
import { FindMemberOneSuccess } from "./members.repository";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { memberStatus } from "@/core/domains/member/status";

type Hoge = HttpResponse<FindMemberOneSuccess>;

export const transform = (res: Hoge): ActiveMember | null => {
  if (res.data.data.member_status_activities_test.length === 0) {
    return null;
  } else if (
    res.data.data.member_status_activities_test[0].member_active == null
  ) {
    return null;
  }
  const responseActiveMember =
    res.data.data.member_status_activities_test[0].member_active;

  // TODO: カラム名はキャピタルケースにする
  const activeMember: ActiveMember = {
    // TODO: anyになっているのを直す
    status: memberStatus.active,
    statusActivityId: responseActiveMember.status_activity_id,
    memberId: responseActiveMember.member_id,
    address: responseActiveMember.address,
    postalCode: responseActiveMember.postal_code,
    birthday: responseActiveMember.birthday,
    createdAt: responseActiveMember.created_at,
  };

  return activeMember;
};
