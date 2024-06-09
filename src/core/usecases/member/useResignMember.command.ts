import { type MemberStatus, memberStatus } from "@/core/domains/member/status";
import { apolloMutationErrorHandler } from "@/core/repositories/apolloMutationErrorHandler";
import { useUpdateMemberStatus } from "@/core/repositories/member/members.repository";
import { ApolloError } from "@apollo/client";
import type { GraphQLErrors } from "@apollo/client/errors";

type Props = {
	reasonType: string;
	reasonDetail: string | null;
	agreement: boolean;
};

type ReturnType = {
	data: boolean;
	error: GraphQLErrors | null;
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

	return async (props: Props): Promise<ReturnType> => {
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

		try {
			const res = await mutate(activityInput);
			return { data: res, error: null };
		} catch (error: unknown) {
			if (error instanceof ApolloError) {
				return { data: false, error: apolloMutationErrorHandler(error) };
			}
			return { data: false, error: null };
		}
	};
};
