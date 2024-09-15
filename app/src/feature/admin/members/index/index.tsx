import type { FC } from "react";

import { memberStatus } from "app/src/core/domains/member/status";
import { useFetchMembers } from "app/src/core/usecases/member/useFetchMembers.query";
import { MembersList } from "./MembersList";

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
			<div className="flex flex-wrap">
				<input
					id={memberStatus.pendingActivation}
					type="radio"
					name="TAB"
					className="tab-switch hidden"
					checked={data.queryMemberStatus === memberStatus.pendingActivation}
					onChange={() => refetch(memberStatus.pendingActivation)}
				/>
				<label
					className={`cursor-pointer text-white mr-1 px-3 py-1 order-first ${
						data.queryMemberStatus === memberStatus.pendingActivation
							? "bg-blue-500"
							: "bg-gray-300"
					}`}
					htmlFor={memberStatus.pendingActivation}
				>
					認証前
				</label>
				<div
					className={`w-full ${data.queryMemberStatus === memberStatus.pendingActivation ? "block" : "hidden"}`}
				>
					<MembersList members={data.members} />
				</div>

				<input
					id={memberStatus.active}
					type="radio"
					name="TAB"
					className="tab-switch hidden"
					checked={data.queryMemberStatus === memberStatus.active}
					onChange={() => refetch(memberStatus.active)}
				/>
				<label
					className={`cursor-pointer text-white mr-1 px-3 py-1 order-first ${
						data.queryMemberStatus === memberStatus.active
							? "bg-blue-500"
							: "bg-gray-300"
					}`}
					htmlFor={memberStatus.active}
				>
					アクティブ
				</label>
				<div
					className={`w-full ${data.queryMemberStatus === memberStatus.active ? "block" : "hidden"}`}
				>
					<MembersList members={data.members} />
				</div>

				<input
					id={memberStatus.resigned}
					type="radio"
					name="TAB"
					className="tab-switch hidden"
					checked={data.queryMemberStatus === memberStatus.resigned}
					onChange={() => refetch(memberStatus.resigned)}
				/>
				<label
					className={`cursor-pointer text-white mr-1 px-3 py-1 order-first ${
						data.queryMemberStatus === memberStatus.resigned
							? "bg-blue-500"
							: "bg-gray-300"
					}`}
					htmlFor={memberStatus.resigned}
				>
					退会済み
				</label>
				<div
					className={`w-full ${data.queryMemberStatus === memberStatus.resigned ? "block" : "hidden"}`}
				>
					<MembersList members={data.members} />
				</div>

				<input
					id={memberStatus.banned}
					type="radio"
					name="TAB"
					className="tab-switch hidden"
					checked={data.queryMemberStatus === memberStatus.banned}
					onChange={() => refetch(memberStatus.banned)}
				/>
				<label
					className={`cursor-pointer text-white mr-1 px-3 py-1 order-first ${
						data.queryMemberStatus === memberStatus.banned
							? "bg-blue-500"
							: "bg-gray-300"
					}`}
					htmlFor={memberStatus.banned}
				>
					アカウント停止
				</label>
				<div
					className={`w-full ${data.queryMemberStatus === memberStatus.banned ? "block" : "hidden"}`}
				>
					<MembersList members={data.members} />
				</div>
			</div>
		</div>
	);
};
