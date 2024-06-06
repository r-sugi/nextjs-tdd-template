import Link from "next/link";
import type { FC } from "react";

import {
	adminSecretPages,
	loginRequiredPages,
	publicPages,
} from "@/const/paths";

export const HeaderTemplate: FC = () => {
	const pages = [
		publicPages.index,
		loginRequiredPages.mypage,
		loginRequiredPages.mypageResignMemberInput,
		loginRequiredPages.mypageResignMemberConfirm,
		adminSecretPages.members,
	];

	return (
		<div>
			<ul>
				{pages.map((page) => (
					<li key={page.path()}>
						<Link href={page.path()}>{page.title()}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
