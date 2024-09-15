import type { ActiveMember } from "@/core/domains/member/activeMember";
import { memberStatus } from "@/core/domains/member/status";
import type { MemberActive } from "@/generated/graphql";
import type { GetActiveMemberQueryResult } from "@/generated/graphql";

export const transform = (
	res: GetActiveMemberQueryResult,
): ActiveMember | null => {
	if (res?.data?.memberStatusActivityLatest?.length === 0) {
		return null;
	}
	if (res?.data?.memberStatusActivityLatest[0] == null) {
		return null;
	}
	const responseActiveMember = res.data
		.memberStatusActivityLatest[0] as MemberActive;

	const activeMember = {
		memberId: responseActiveMember.memberId,
		status: memberStatus.active,
		statusActivityId: responseActiveMember.statusActivityId,
		address: responseActiveMember.address,
		postalCode: responseActiveMember.postalCode,
		email: responseActiveMember.email,
		createdAt: new Date(responseActiveMember.createdAt),
		birthday: new Date(responseActiveMember.birthday),
	} as const satisfies ActiveMember;

	return activeMember;
};
