import { memberStatus } from "@/core/domains/member/status";
import {
	type UpdateMemberStatusInputType,
	useUpdateMemberStatus,
} from "@/core/repositories/member/members.repository";
import { useNotifyAPIError } from "../../../hooks/error/useNotifyAPIError";

type Props = {
	reasonType: string;
	reasonDetail: string | null;
	agreement: boolean;
};

type UseResignMemberReturnType = {
	data: UpdateMemberStatusInputType["activityInput"] | null;
};

export const useResignMember = () => {
	const mutate = useUpdateMemberStatus();
	const notify = useNotifyAPIError();

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
		const { data, error } = await mutate(activityInput);
		// ApolloErrorsをユーザーに通知している
		error && notify.setError(error);
		return {
			data,
		};
	};
};
