import type { FC } from "react";

import { useFetchAllMembers } from "@/core/usecases/member/useFetchAllMembers.query";
import { MemberTable } from "./table/table";

export const IndexTemplate: FC = () => {
	const { data, loading } = useFetchAllMembers();

	// TODO: データ型を変換しておく

	// TODO: listItems = [{}, {}]

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

	// TODO: モーダルで決定orキャンセルの確認を出す(portal)

	return (
		<div data-testid="admin-members-index">
			{/* メンバー一覧 */}
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold mb-4">Members</h1>
				<MemberTable members={data.members} />
			</div>
		</div>
	);
};
