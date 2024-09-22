import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { FC } from "react";
import { ListItem } from "../list/ListItem";
import { PopupMenu } from "../popup/Popup";
import { ThreeDotsIcon } from "../threeDotsIcon/ThreeDots.icon";
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
			</td>
			<td className="py-2 px-4 border-b border-gray-300">
				{member.statusActivityId}
			</td>
			<td className="py-2 px-4 border-b border-gray-300">{member.status}</td>
			<td className="cursor-pointer py-2 px-4 border-b border-gray-300">
				<div className="flex justify-between">
					<div className="items-center">
						<PopupMenu opener={<ThreeDotsIcon />}>
							<ListItem onClick={() => onClickBan(member)} label="Ban" />
							<ListItem
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
