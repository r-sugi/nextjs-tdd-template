import type { FC } from "react";

import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";

const IndexTemplate: FC = () => {
	const { data: activeMember, loading } = useFetchActiveMember();

	if (loading) {
		return <div>loading...</div>;
	}

	if (activeMember == null) {
		// メンバーが存在しない場合はリダイレクト
	}

	return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};

export default IndexTemplate;
