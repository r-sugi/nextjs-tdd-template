import type { FetchResult } from "@apollo/client";
import type { MemberStatus } from "app/src/core/domains/member/status";
import type { ResignMemberMutation } from "app/src/generated/graphql";
import type { UpdateMemberStatusInputType } from "../members.repository";

export const resignMemberTransform = (
	res: FetchResult<ResignMemberMutation>,
): UpdateMemberStatusInputType["activityInput"] | null => {
	if (res?.data == null) {
		return null;
	}
	if (res?.data?.insert_memberStatusActivities_one == null) {
		return null;
	}
	if (res?.data?.insert_memberStatusActivities_one.memberResigned == null) {
		return null;
	}
	const { status, memberId } = res.data.insert_memberStatusActivities_one as {
		status: MemberStatus; // TODO: ここで型エラーを解決したい
		memberId: string;
	};
	const memberResigned =
		res.data.insert_memberStatusActivities_one.memberResigned;

	return {
		status,
		memberId,
		memberResigned: {
			data: {
				memberId: memberResigned.memberId,
				reasonType: memberResigned.reasonType,
				agreement: memberResigned.agreement,
				reasonDetail: memberResigned.reasonDetail ?? null,
			},
		},
	};
};
