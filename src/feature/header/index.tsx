import Link from "next/link";
import type { FC } from "react";

import {
	adminSecretPages,
	loginRequiredPages,
	publicPages,
} from "@/const/paths";
import { useAuthContext } from "../auth/provider/AuthProvider";

export const HeaderTemplate: FC = () => {
	const { user } = useAuthContext();

	const pages = [
		publicPages.index,
		loginRequiredPages.mypage,
		loginRequiredPages.mypageResignMemberInput,
		loginRequiredPages.mypageResignMemberConfirm,
		adminSecretPages.members,
	];

	return (
		<div>
			<hr />
			ヘッダー
			<div>{user ? "サインイン中" : "サインアウト中"}</div>
			{user ? (
				<Link href={loginRequiredPages.signOut.path()}>サインアウト</Link>
			) : (
				<Link href={publicPages.signIn.path()}>サインイン</Link>
			)}
			<ul>
				{pages.map((page) => (
					<li key={page.path()}>
						<Link href={page.path()}>{page.title()}</Link>
					</li>
				))}
			</ul>
			<hr />
		</div>
	);
};
