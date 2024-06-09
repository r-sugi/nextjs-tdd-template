import { useRouter } from "next/router";
import type { FC } from "react";

import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";

export const IndexTemplate: FC = () => {
	const router = useRouter();
	const { data: activeMember, loading, errors } = useFetchActiveMember();

	if (loading) {
		return <div>loading...</div>;
	}

	if (errors) {
		// TODO: （ユーザーが理解できるエラー内容であるなら）
		// ユーザーにエラーを回避してもらうために、エラーを画面に表示した方が良いかもしれない
		return <div>error: {JSON.stringify(errors, null, 2)}</div>;
	}

	if (activeMember == null) {
		(async () => {
			await router.push("/");
		})();
	}

	return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};
