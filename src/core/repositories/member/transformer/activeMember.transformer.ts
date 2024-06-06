import type { ActiveMember } from "@/core/domains/member/activeMember";
import { memberStatus } from "@/core/domains/member/status";
import type { MemberActive } from "@/generated/graphql";
import type { GetActiveMemberQueryResult } from "@/generated/graphql";

export const transform = (
	res: GetActiveMemberQueryResult,
): ActiveMember | null => {
	// FIXME: graphqlエラー処理を追加時に判断する
	// if (res.data == null) {
	//   return null;
	// } else
	if (res?.data?.memberStatusActivityLatest?.length === 0) {
		return null;
	} else if (res?.data?.memberStatusActivityLatest[0] == null) {
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
