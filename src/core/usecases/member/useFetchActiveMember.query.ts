import { useEffect, useRef, useState } from "react";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import type { ApolloError } from "@apollo/client/errors";
import { useNotifyAPIError } from "../../../hooks/error/useNotifyAPIError";

type UseCaseLoading = {
	data: InitialActiveMember;
	error: null;
	loading: true;
} & Record<string, unknown>;

type UseCaseLoaded<T> = {
	data: T | null;
	error: ApolloError | null;
	loading: false;
} & Record<string, unknown>;

type UseCase<T> = UseCaseLoading | UseCaseLoaded<T>;

type InitialActiveMember = undefined;
type ActiveMemberState = ActiveMember | null | InitialActiveMember; // TODO: nullに型名をつける
const initialActiveMember: InitialActiveMember = undefined;
type ErrorState = ApolloError | null;

export const useFetchActiveMember = (): UseCase<ActiveMember> => {
	const [activeMember, setActiveMember] =
		useState<ActiveMemberState>(initialActiveMember);
	// question(zawa): このエラーは不要ですかね？
	const [error, setError] = useState<ErrorState>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const query = useFindActiveMemberOne();
	const notify = useNotifyAPIError();

	// チラつき防止
	const ref = useRef(error);
	useEffect(() => {
		ref.current = error;
	}, [error]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data, error } = await query(
				// TODO: 動的な値(JWTから取得したもの)
				"ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
			);
			setActiveMember(data);
			setError(error);
			error && notify.setError(error);
			// question(zawa): loading が複数回更新される場合、関数で更新する必要がある、とかじゃなかったでしたっけ？
			setLoading(false);
		})();
	}, []);

	return {
		data: activeMember,
		loading,
	} as UseCase<ActiveMember>;
};
