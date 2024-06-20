import { loginRequiredPages } from "@/const/paths";

import dynamic from "next/dynamic";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("@/feature/mypage/index/index"), {
	ssr: false,
});
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});

// TODO: getServersidePropsでcookieからfirebaseの認証情報を取得する -> pageに渡して認証情報を取得する(midllewareでもやるし)
export default function Index() {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypage.title()}
				description={loginRequiredPages.mypage.description()}
				path={loginRequiredPages.mypage.path()}
			/>
			<AuthGuard>
				<IndexTemplate />
			</AuthGuard>
		</>
	);
}
