import { useEffect, useState } from "react";

import type { ActiveMember } from "app/src/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "app/src/core/repositories/member/members.repository";
import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useErrorNotificationContext } from "app/src/feature/error/banner/ErrorNotificationContext";

// @remarks: 配列以外の値の場合は、nullを初期値とする(データ取得失敗時はエラー表示するためデータを参照して処理しない方針)
type InitialActiveMember = null;
type ResultActiveMember = ActiveMember;
type ActiveMemberState = InitialActiveMember | ResultActiveMember;
const initialActiveMember: InitialActiveMember = null;

type UseCaseLoading<I> = {
	data: I;
	loading: true;
} & Record<string, unknown>;

type UseCaseLoaded<R> = {
	data: R;
	loading: false;
} & Record<string, unknown>;

type UseCase<I, R> = UseCaseLoading<I> | UseCaseLoaded<R>;

export const useFetchActiveMember = (): UseCase<
	InitialActiveMember,
	ResultActiveMember
> => {
	const [activeMember, setActiveMember] =
		useState<ActiveMemberState>(initialActiveMember);
	const [loading, setLoading] = useState<boolean>(false);
	const query = useFindActiveMemberOne();
	const { notify } = useErrorNotificationContext();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data, error } = await query(
				// TODO: 動的な値(JWTから取得したもの)
				"ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
			);
			setActiveMember(data);
			if (error) {
				notify(error);
				outputErrorLog(error);
			}
			setLoading(() => false);
		})();
	}, []);

	return {
		data: activeMember,
		loading,
	} as UseCase<InitialActiveMember, ResultActiveMember>;
};
