import { useRouter } from "next/router";
import type { FC } from "react";

import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";

export const IndexTemplate: FC = () => {
	const router = useRouter();
	const { data: activeMember, loading, error } = useFetchActiveMember();

	if (loading) {
		return <div>loading...</div>;
	}

	if (error) {
		return <div>error: {JSON.stringify(error, null, 2)}</div>;
	}

	if (!activeMember) {
		router.push("/mypage");
	}

	return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};
