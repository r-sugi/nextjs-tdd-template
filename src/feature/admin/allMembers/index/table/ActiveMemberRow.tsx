import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { FC } from "react";
import { MenuItem } from "../list/MenuItem";
import { PopupMenu } from "../popup";
import { ThreeDotsIcon } from "../three-dots.icon";

export const ActiveMemberRow: FC<{
	member: ActiveMember;
	onClickDelete: (member: ActiveMember) => void;
	onClickDisable: (member: ActiveMember) => void;
}> = ({ member, onClickDelete, onClickDisable }) => {
	// 1 const ref = useRef でrefを定義する
	// 2 <Dialog ref={ref}>　でDOMを定義する
	// 3 ref.current?.showModal();　で表示する
	// 4 onClickイベントを受け取る
	// 5 API通信する

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
							<MenuItem onClick={() => onClickDelete(member)} label="Delete" />
							<MenuItem
								onClick={() => onClickDisable(member)}
								label="disable"
							/>
						</PopupMenu>
					</div>
				</div>
			</td>
		</tr>
	);
};
