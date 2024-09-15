import {
	loginFormPagePaths,
	loginRequiredPagePaths,
	loginRequiredPages,
	publicPages,
} from "@/const/paths";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { useAuthContext } from "../provider/AuthProvider";

type Props = {
	children: ReactNode;
};

export default function AuthGuard({ children }: Props) {
	const { member } = useAuthContext();
	const router = useRouter();

	// ログインしていない場合、ログインが必要なページにアクセスした場合、サインインページにリダイレクトする
	if (member === null && loginRequiredPagePaths.includes(router.pathname)) {
		console.log("auth guard: redirect to sign in page");
		router.push(publicPages.signIn.path());
		return null;
	}
	// ログインしている場合、サインアップページまたはサインインページにアクセスした場合、マイページにリダイレクトする
	if (member && loginFormPagePaths.includes(router.pathname)) {
		console.log("auth guard: force redirect to mypage page");
		router.push(loginRequiredPages.mypage.path());
		return null;
	}

	return <div>{children}</div>;
}
