import Link from "next/link";
import { useRouter } from "next/router";

import {
	adminSecretPages,
	loginRequiredPages,
	publicPages,
} from "@/const/paths";

import { useSignOut } from "@/shared/usecases/auth/useSignOut.command";
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

export const HeaderTemplate = () => {
	const { member } = useAuthContext();
	const router = useRouter();
	const { signOut } = useSignOut();

	const signOutHandler = async () => {
		await signOut();
		await router.push(publicPages.signIn.path());
	};

	// TODO: コンポーネントに切り出す？
	const signInButton = () => {
		// ログイン中の場合
		if (member) {
			return (
				<button type="button" onClick={() => signOutHandler()}>
					サインアウト
				</button>
			);
		}
		// 初期値
		if (member === undefined) {
			return null;
		}
		// ログインしていない場合
		return <Link href={publicPages.signIn.path()}>サインイン</Link>;
	};

	return (
		<div>
			<hr />
			ヘッダー
			{signInButton()}
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
