import { loginRequiredPages } from "@/const/paths";

import { ErrorBanner } from "@/feature/error/banner/ErrorBanner";
import { ErrorNotificationProvider } from "@/feature/error/banner/ErrorNotificationContext";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("@/feature/mypage/index/index"), {
	ssr: false,
});
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});

// TODO: getServersidePropsでcookieからfirebaseの認証情報を取得する -> pageに渡して認証情報を取得する(midllewareでもやるし)
export default function Index() {
	return <IndexTemplate />;
}

const pageId = "page-mypage-resign-member-index";

// レイアウト制御
Index.getLayout = function getLayout(page: ReactNode) {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypage.title()}
				description={loginRequiredPages.mypage.description()}
				path={loginRequiredPages.mypage.path()}
			/>
			<ErrorNotificationProvider customId={pageId}>
				<ErrorBanner />
				<AuthGuard>{page}</AuthGuard>
			</ErrorNotificationProvider>
		</>
	);
};
