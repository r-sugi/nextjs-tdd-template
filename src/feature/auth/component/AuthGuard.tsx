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
	if (typeof window === "undefined") {
		return <div>{children}</div>;
	}

	const { member } = useAuthContext();
	const router = useRouter();

	if (typeof member === "undefined") {
		return <div>読み込み中...</div>;
	}
	if (member === null && loginRequiredPagePaths.includes(router.pathname)) {
		console.log("auth guard: redirect to sign in page");
		router.push(publicPages.signIn.path());
		return null;
	}
	if (member && loginFormPagePaths.includes(router.pathname)) {
		console.log("auth guard: force redirect to mypage page");
		router.push(loginRequiredPages.mypage.path());
		return null;
	}

	return <>{children}</>;
}
