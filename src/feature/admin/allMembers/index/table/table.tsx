import type { AllMembers } from "@/core/domains/member/member";
import type { OnSubmitStatusChange } from "..";
import { MemberTableRow } from "./MemberTableRow";

type PropsType = {
	members: AllMembers;
	onSubmit: OnSubmitStatusChange;
};

export const MemberTable = ({ members, onSubmit }: PropsType) => {
	const tableHeaders = ["Created At", "Status Activity ID", "Status", ""];

	// TODO: table layoutを追加する

	return (
		<table className="min-w-full bg-white border border-gray-300">
			{/* childrenで渡す */}
			<thead>
				<tr>
					{tableHeaders.map((header) => (
						<th
							key={header}
							className="py-2 px-4 bg-gray-200 border-b border-gray-300"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			{/* childrenで渡す */}
			<tbody>
				{members.map((member) => (
					<MemberTableRow
						member={member}
						key={member.statusActivityId}
						onSubmit={onSubmit}
					/>
				))}
			</tbody>
		</table>
	);
};
