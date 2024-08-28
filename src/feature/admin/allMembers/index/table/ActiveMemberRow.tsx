import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { FC } from "react";
import { MenuItem } from "../list/MenuItem";
import { PopupMenu } from "../popup";
import { ThreeDotsIcon } from "../three-dots.icon";

export const ActiveMemberRow: FC<{
	member: ActiveMember;
}> = ({ member }) => {
	const onClickDelete = () => {
		// mutate
		console.log("TODO: mutate", member);
		// refresh cache
		console.log("TODO: refresh cache", member);
	};
	const onClickDisable = () => {
		// mutate
		console.log("TODO: mutate", member);
		// refresh cache
		console.log("TODO: refresh cache", member);
	};

	return (
		<tr>
			<td className="py-2 px-4 border-b border-gray-300">
				{member.createdAt.getTime()}
				row.createdAt
			</td>
			<td className="py-2 px-4 border-b border-gray-300">
				{member.statusActivityId}
			</td>
			<td className="py-2 px-4 border-b border-gray-300">{member.status}</td>
			<td className="cursor-pointer py-2 px-4 border-b border-gray-300">
				<div className="flex justify-between">
					<div className="items-center">
						<PopupMenu opener={<ThreeDotsIcon />}>
							<MenuItem onClick={onClickDelete} label="Delete" />
							<MenuItem onClick={onClickDisable} label="disable" />
						</PopupMenu>
					</div>
				</div>
			</td>
		</tr>
	);
};
