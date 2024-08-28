import type { AllMembers } from "@/core/domains/member/member";
import { PopupMenu } from "./popup";
import { ThreeDotsIcon } from "./three-dots.icon";

type PropsType = {
	members: AllMembers;
};

export const MemberTable = ({ members }: PropsType) => {
	const tableHeaders = [
		"Created At",
		// TODO: ドメインモデルの定義、ドメインロジックの定義を修正する
		// "Email",
		// "Member ID",
		"Status Activity ID",
		"Type",
		"Status",
		"",
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
						{/* // TODO: ドメインモデルの定義、ドメインロジックの定義を修正する */}
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
						<td className="cursor-pointer py-2 px-4 border-b border-gray-300">
							<div className="flex justify-between">
								{/* <div>
									<Link
										href={"#"}
										className="text-blue-500 hover:text-blue-800 hover:underline"
									>
										Details
									</Link>
								</div> */}
								<div className="items-center">
									<PopupMenu>
										<ThreeDotsIcon />
									</PopupMenu>
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
