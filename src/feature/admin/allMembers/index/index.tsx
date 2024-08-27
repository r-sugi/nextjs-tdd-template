import type { FC } from "react";

import { memberStatus } from "@/core/domains/member/status";
import { useFetchMembers } from "@/core/usecases/member/useFetchMembers.query";
import { MemberTable } from "./table";

export const IndexTemplate: FC = () => {
	const { data, refetch, loading } = useFetchMembers();

	if (loading) {
		return <div>loading...</div>;
	}
	if (data?.members === null) {
		return (
			<div data-testid="admin-members-index-error">
				CSR リクエストエラー: データ取得に失敗しました
			</div>
		);
	}

	return (
		<div data-testid="admin-members-index">
			{/* メンバー一覧 */}
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold mb-4">Member Information</h1>
				<MemberTable members={data.members} />
			</div>
		</div>
	);
};
