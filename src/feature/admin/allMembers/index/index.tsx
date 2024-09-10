import type { FC } from "react";

import { useFetchAllMembers } from "@/core/usecases/member/useFetchAllMembers.query";

import { MemberTableRow } from "./table/MemberTableRow";
import { MemberTable } from "./table/table";
import { type OnSubmitStatusChange, eventTypes } from "./table/type";

export const IndexTemplate: FC = () => {
	const { data, loading } = useFetchAllMembers();

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

	// Event
	const onSubmit: OnSubmitStatusChange = (payload) => {
		if (payload.type === eventTypes.onClickBan) {
			console.log("API処理", payload.detail);
		} else if (payload.type === eventTypes.onClickDisable) {
			console.log("API処理", payload.detail);
		}
	};

	return (
		<div data-testid="admin-members-index">
			{/* メンバー一覧 */}
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold mb-4">Members</h1>
				<MemberTable>
					{data.members.map((member) => (
						<MemberTableRow
							member={member}
							key={member.statusActivityId}
							onSubmit={onSubmit}
						/>
					))}
				</MemberTable>
			</div>
		</div>
	);
};
