import type { MembersByType } from "@/core/domains/member/member";

type PropsType = {
	members: MembersByType;
};

export const MemberTable = ({ members }: PropsType) => {
	const tableHeaders = [
		"Created At",
		// "Email",
		// "Member ID",
		"Status Activity ID",
		"Type",
		"Status",
	];

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
					<tr key={member.statusActivityId}>
						<td className="py-2 px-4 border-b border-gray-300">
							{member.createdAt.getTime()}
						</td>
						{/* <td className="py-2 px-4 border-b border-gray-300">
							{member.email}
						</td> */}
						{/* <td className="py-2 px-4 border-b border-gray-300">
							{member.memberId}
						</td> */}
						<td className="py-2 px-4 border-b border-gray-300">
							{member.statusActivityId}
						</td>
						<td className="py-2 px-4 border-b border-gray-300">
							{member.status}
						</td>
						<td className="py-2 px-4 border-b border-gray-300">
							{member.status}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
