import type { MembersByType } from "@/core/domains/member/member";
import type { FC } from "react";

type Props = {
	members: MembersByType;
};

export const MembersList: FC<Props> = (props) => {
	console.log(props.members);
	if (props.members.length === 0) {
		return <div>メンバーがいません</div>;
	}

	return (
		<ul>
			{props.members.map((member) => (
				<li key={member.statusActivityId}>{JSON.stringify(member, null, 2)}</li>
			))}
		</ul>
	);
};
