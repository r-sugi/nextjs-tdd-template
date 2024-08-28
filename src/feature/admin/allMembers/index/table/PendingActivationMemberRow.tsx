import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import type { FC } from "react";
import { MenuItem } from "../list/MenuItem";
import { PopupMenu } from "../popup";
import { ThreeDotsIcon } from "../three-dots.icon";

export const PendingActivationMemberRow: FC<{
	member: PendingActivationMember;
}> = ({ member }) => {
	const onClickDelete = () => {
		// mutate
		console.log("TODO: mutate", member);
		// refresh cache
		console.log("TODO: refresh cache", member);
	};

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
							<MenuItem onClick={onClickDelete} label="Delete" />
						</PopupMenu>
					</div>
				</div>
			</td>
		</tr>
	);
};
