import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { FC } from "react";
import { MenuItem } from "../list/MenuItem";
import { PopupMenu } from "../popup";
import { ThreeDotsIcon } from "../three-dots.icon";
import type { OnClickBan, OnClickDisable } from "./type";

export const ActiveMemberRow: FC<{
	member: ActiveMember;
	onClickBan: OnClickBan<ActiveMember>;
	onClickDisable: OnClickDisable<ActiveMember>;
}> = ({ member, onClickBan, onClickDisable }) => {
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
							<MenuItem onClick={() => onClickBan(member)} label="Delete" />
							<MenuItem
								onClick={() => onClickDisable(member)}
								label="Disable"
							/>
						</PopupMenu>
					</div>
				</div>
			</td>
		</tr>
	);
};
