import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import type { MembersByType } from "app/src/core/domains/member/member";
import {
	type MemberStatus,
	memberStatus,
} from "app/src/core/domains/member/status";
import { useFetchMembersByStatus } from "app/src/core/repositories/member/members.repository";
import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useErrorNotificationContext } from "app/src/feature/error/banner/ErrorNotificationContext";

// @remarks: 配列の場合は、空配列を初期値とする(データ取得失敗時はエラー表示するためデータを参照して処理しない方針)
type InitialMembersState = undefined;
type ResultMembersState = MembersByType | null;
type MembersState = InitialMembersState | ResultMembersState;
const initialMemberState: InitialMembersState = undefined;
const defaultStatus = memberStatus.pendingActivation;

type UseCaseLoading<I> = {
	data: {
		members: I;
		queryMemberStatus: MemberStatus;
	};
	loading: true;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UseCaseLoaded<R> = {
	data: {
		members: R;
		queryMemberStatus: MemberStatus;
	};
	loading: false;
	refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UseCase<I, R> = UseCaseLoading<I> | UseCaseLoaded<R>;

type Props = {
	status?: MemberStatus;
};

export const useFetchMembers = (
	props?: Props,
): UseCase<InitialMembersState, ResultMembersState> => {
	const [queryMemberStatus, setQueryMemberStatus] = useState<MemberStatus>(
		props?.status ?? defaultStatus,
	);
	const [members, setMembers] = useState<MembersState>(initialMemberState);
	const query = useFetchMembersByStatus();
	const { notify } = useErrorNotificationContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, error } = await query(queryMemberStatus);
			setMembers(data);
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
		})();
	}, [queryMemberStatus]);

	return {
		data: {
			members,
			queryMemberStatus,
		},
		loading: members === initialMemberState,
		refetch: setQueryMemberStatus,
	} as UseCase<InitialMembersState, ResultMembersState>;
};
