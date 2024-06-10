import { type MemberStatus, memberStatus } from "@/core/domains/member/status";
import { useUpdateMemberStatus } from "@/core/repositories/member/members.repository";
import type { ApolloError } from "@apollo/client/errors";

type Props = {
	reasonType: string;
	reasonDetail: string | null;
	agreement: boolean;
};

export type UseResignMemberReturnType = {
	data: boolean;
	error: ApolloError | null;
};

export type UpdateMemberStatusInputType = {
	activityInput: {
		status: MemberStatus;
		memberId: string;
		memberResigned: {
			data: {
				memberId: string;
				reasonType: string;
				agreement: boolean;
				reasonDetail: string | null;
			};
		};
	};
};

export const useResignMember = () => {
	const mutate = useUpdateMemberStatus();

	return async (props: Props): Promise<UseResignMemberReturnType> => {
		const activityInput: UpdateMemberStatusInputType = {
			activityInput: {
				status: memberStatus.resigned,
				// TODO: ログインメンバーのID
				memberId: "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
				memberResigned: {
					data: {
						// TODO: ログインメンバーのID
						memberId: "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
						reasonType: props.reasonType,
						agreement: props.agreement,
						reasonDetail: props.reasonDetail,
					},
				},
			},
		};
		return await mutate(activityInput);
	};
};
