import type { AllMembers } from "app/src/core/domains/member/member";
import { useFetchMembersAll } from "app/src/core/repositories/member/members.repository";
import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useErrorNotificationContext } from "app/src/feature/error/banner/ErrorNotificationContext";
import { useEffect, useState } from "react";

type InitialAllMembers = undefined;
type ResultAllMembers = AllMembers | null;
type MembersState = InitialAllMembers | ResultAllMembers;
const initialAllMembersState: InitialAllMembers = undefined;

type UseCaseLoading<I> = {
	data: {
		members: I;
	};
	loading: true;
} & Record<string, unknown>;

type UseCaseLoaded<R> = {
	data: {
		members: R;
	};
	loading: false;
} & Record<string, unknown>;

type UseCase<I, R> = UseCaseLoading<I> | UseCaseLoaded<R>;

// ユースケース(ユーザーが実現させたいこと)用の型定義
export const useFetchAllMembers = () => {
	const [members, setMembers] = useState<MembersState>(initialAllMembersState);
	const query = useFetchMembersAll();
	const { notify } = useErrorNotificationContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			const { data, error } = await query();
			setMembers(data);
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
		})();
	}, []);

	return {
		data: {
			members,
		},
		loading: members === initialAllMembersState,
	} as UseCase<InitialAllMembers, ResultAllMembers>;
};
