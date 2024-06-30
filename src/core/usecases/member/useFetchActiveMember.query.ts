import { useEffect, useState } from "react";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { outputErrorLog } from "@/error/outputErrorLog";
import { useNotification } from "../../../error/hooks/useNotification";

type UseCaseLoading = {
	data: InitialActiveMember;
	loading: true;
} & Record<string, unknown>;

type UseCaseLoaded<T> = {
	data: T | null;
	loading: false;
} & Record<string, unknown>;

type UseCase<T> = UseCaseLoading | UseCaseLoaded<T>;

type InitialActiveMember = undefined;
type ActiveMemberState = ActiveMember | null | InitialActiveMember; // TODO: nullに型名をつける
const initialActiveMember: InitialActiveMember = undefined;

export const useFetchActiveMember = (): UseCase<ActiveMember> => {
	const [activeMember, setActiveMember] =
		useState<ActiveMemberState>(initialActiveMember);
	const [loading, setLoading] = useState<boolean>(false);
	const query = useFindActiveMemberOne();
	const { notify } = useNotification();

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
	} as UseCase<ActiveMember>;
};
