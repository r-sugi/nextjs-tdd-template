import { useRouter } from "next/router";
import type { FC } from "react";

import { apolloErrorHandler } from "@/core/repositories/apolloErrorHandler";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";

export const IndexTemplate: FC = () => {
	const router = useRouter();
	const { data: activeMember, loading, error } = useFetchActiveMember();

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		const graphQLErrors = apolloErrorHandler(error);
		return <div>graphQLErrors: {JSON.stringify(graphQLErrors, null, 2)}</div>;
	}

	if (activeMember == null) {
		(async () => {
			window.alert("ログインしてください");
			await router.push("/");
		})();
	}

	return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};
