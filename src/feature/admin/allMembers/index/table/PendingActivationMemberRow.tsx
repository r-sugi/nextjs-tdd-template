import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import type { FC } from "react";
import { MenuItem } from "../list/MenuItem";
import { PopupMenu } from "../popup";
import { ThreeDotsIcon } from "../three-dots.icon";
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
							<MenuItem
								onClick={() => {
									onClickBan(member);
								}}
								label="Delete"
							/>
						</PopupMenu>
					</div>
				</div>
			</td>
		</tr>
	);
};
