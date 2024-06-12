import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";

import {
	adminSecretPages,
	loginRequiredPages,
	publicPages,
} from "@/const/paths";
import { signOut } from "@/feature/auth";

import { useAuthContext } from "../auth/provider/AuthProvider";

const pages = [
	publicPages.index,
	loginRequiredPages.mypage,
	loginRequiredPages.mypageResignMemberInput,
	loginRequiredPages.mypageResignMemberConfirm,
	adminSecretPages.members,
];

export const HeaderTemplate: FC = () => {
	const { member } = useAuthContext();
	const router = useRouter();

	const signOutHandler = async () => {
		await signOut();
		await router.push(publicPages.signIn.path());
	};

	return (
		<div>
			<hr />
			ヘッダー
			<div>{member ? "サインイン中" : "サインアウト中"}</div>
			{member ? (
				<button type="button" onClick={() => signOutHandler()}>
					サインアウト
				</button>
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
