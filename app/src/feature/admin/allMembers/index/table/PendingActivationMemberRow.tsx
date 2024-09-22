import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import type { FC } from "react";
import { ListItem } from "../list/ListItem";
import { PopupMenu } from "../popup/Popup";
import { ThreeDotsIcon } from "../threeDotsIcon/ThreeDots.icon";
import type { OnClickBan } from "./type";

export const PendingActivationMemberRow: FC<{
	member: PendingActivationMember;
	onClickBan: OnClickBan<PendingActivationMember>;
}> = ({ member, onClickBan }) => {
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
							<ListItem
								onClick={() => {
									onClickBan(member);
								}}
								label="Ban"
							/>
						</PopupMenu>
					</div>
				</div>
			</td>
		</tr>
	);
};
