import type { AllMembers } from "@/core/domains/member/member";
import { MemberTableRow } from "./MemberTableRow";

type PropsType = {
	members: AllMembers;
};

export const MemberTable = ({ members }: PropsType) => {
	const tableHeaders = ["Created At", "Status Activity ID", "Status", ""];

	// UI shadcn tableを使う

	return (
		<table className="min-w-full bg-white border border-gray-300">
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
			<tbody>
				{members.map((member) => (
					<MemberTableRow member={member} key={member.statusActivityId} />
				))}
			</tbody>
		</table>
	);
};
