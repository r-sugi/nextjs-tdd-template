import type { FC } from "react";

import { apolloErrorHandler } from "@/core/repositories/apolloErrorHandler";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";

const IndexTemplate: FC = () => {
	const { data: activeMember, loading, error } = useFetchActiveMember();

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		const graphQLErrors = apolloErrorHandler(error);
		return <div>graphQLErrors: {JSON.stringify(graphQLErrors, null, 2)}</div>;
	}

	if (activeMember == null) {
		// メンバーが存在しない場合はリダイレクト
	}

	return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};

export default IndexTemplate;
