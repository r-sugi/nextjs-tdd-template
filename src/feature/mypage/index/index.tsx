import { useRouter } from "next/router";
import type { FC } from "react";

import { publicPages } from "@/const/paths";
import { apolloErrorHandler } from "@/core/repositories/apolloErrorHandler";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider";

export const IndexTemplate: FC = () => {
	const { member } = useAuthContext();
	const router = useRouter();

	if (typeof window !== "undefined" && !member) {
		router.push(publicPages.signIn.path());
	}

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
