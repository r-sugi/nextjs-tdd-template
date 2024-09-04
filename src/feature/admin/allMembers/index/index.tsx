import type { FC } from "react";

import { useFetchAllMembers } from "@/core/usecases/member/useFetchAllMembers.query";

import { MemberTable } from "./table/table";

// TODO: 型定義, 命名
// EventTypeの関数を用意して、presentaionに渡す
export type OnSubmitStatusChange = (
	type: "onClickBan" | "onClickDisable",
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	detail: any,
) => void;

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
	const onSubmit: OnSubmitStatusChange = (type, detail) => {
		if (type === "onClickBan") {
			// note: UseCaseがほしいI/Fで呼び出す
			// mutationYYY.mutate(detail);
		} else if (type === "onClickDisable") {
			// note: UseCaseがほしいI/Fで呼び出す
			// mutationXXX.mutate(detail);
		}
	};

	return (
		<div data-testid="admin-members-index">
			{/* メンバー一覧 */}
			<div className="container mx-auto">
				<h1 className="text-2xl font-bold mb-4">Members</h1>
				<MemberTable members={data.members} onSubmit={onSubmit} />
			</div>
		</div>
	);
};
