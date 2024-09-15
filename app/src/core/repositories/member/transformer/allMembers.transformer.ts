import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { BannedMember } from "@/core/domains/member/bannedMember";
import type { AllMembers } from "@/core/domains/member/member";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import type { ResignMember } from "@/core/domains/member/resignMember";
import type { RestoredMember } from "@/core/domains/member/restoredMember";
import {
	type MemberStatus,
	memberStatus,
} from "@/core/domains/member/status";
import type { GetAllMembersQueryResult } from "@/generated/graphql";

export const transform = (res: GetAllMembersQueryResult): AllMembers | null => {
	if (res.data == null) {
		return null;
	}
	if (res.data.memberStatusActivityLatest == null) {
		return null;
	}

	const result = res.data.memberStatusActivityLatest.map((activity) => {
		if (activity?.memberActive) {
			const memberActive: ActiveMember = {
				status: "active",
				statusActivityId: activity.memberActive.statusActivityId,
				memberId: activity.memberActive.memberId,
				email: activity.memberActive.email,
				address: activity.memberActive.address,
				postalCode: activity.memberActive.postalCode,
				createdAt: new Date(activity.memberActive.createdAt),
				birthday: new Date(activity.memberActive.birthday),
			};
			return memberActive;
		}
		if (activity?.memberBanned) {
			const memberBanned: BannedMember = {
				...activity.memberBanned,
				status: "banned",
				createdAt: new Date(activity.memberBanned.createdAt),
			};
			return memberBanned;
		}
		if (activity?.memberPendingActivation) {
			const memberPendingActivation: PendingActivationMember = {
				...activity.memberPendingActivation,
				status: "pendingActivation",
				createdAt: new Date(activity.memberPendingActivation.createdAt),
			};
			return memberPendingActivation;
		}
		if (activity?.memberResigned) {
			const memberResigned: ResignMember = {
				...activity.memberResigned,
				status: "resigned",
				reasonDetail: activity.memberResigned.reasonDetail ?? undefined,
				createdAt: new Date(activity.memberResigned.createdAt),
			};
			return memberResigned;
		}
		if (activity?.memberRestored) {
			const memberRestored: RestoredMember = {
				...activity.memberRestored,
				status: "restored",
				createdAt: new Date(activity.memberRestored.createdAt),
			};
			return memberRestored;
		}
		return undefined;
	});
	return result.filter((e) => !!e);
};
