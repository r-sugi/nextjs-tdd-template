import Link from "next/link";
import { useRouter } from "next/router";

import {
	adminSecretPages,
	loginRequiredPages,
	publicPages,
} from "@/const/paths";

import { useSignOut } from "../auth/hooks/useSignOut.command";
import { useAuthContext } from "../auth/provider/AuthProvider";

const pages = [
	publicPages.index,
	publicPages.signIn,
	publicPages.signUp,
	loginRequiredPages.mypage,
	loginRequiredPages.mypageResignMemberInput,
	loginRequiredPages.mypageResignMemberConfirm,
	adminSecretPages.members,
];

export default function HeaderTemplate() {
	const { member } = useAuthContext();
	const { signOut } = useSignOut();
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
}
