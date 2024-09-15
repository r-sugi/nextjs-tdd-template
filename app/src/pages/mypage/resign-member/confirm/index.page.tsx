import { loginRequiredPages } from "app/src/const/paths";
import { ErrorBanner } from "app/src/feature/error/banner/ErrorBanner";
import { ErrorNotificationProvider } from "app/src/feature/error/banner/ErrorNotificationContext";
import { Seo } from "app/src/pages/_seo/seo";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const IndexTemplate = dynamic(
	() => import("app/src/feature/mypage/resignMember/confirm"),
	{
		ssr: false,
	},
);
const AuthGuard = dynamic(
	() => import("app/src/feature/auth/component/AuthGuard"),
	{
		ssr: false,
	},
);

export default function Index() {
	return <IndexTemplate />;
}

const pageId = "page-mypage-resign-member-confirm";

// レイアウト制御
Index.getLayout = function getLayout(page: ReactNode) {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypageResignMemberConfirm.title()}
				description={loginRequiredPages.mypageResignMemberConfirm.description()}
				path={loginRequiredPages.mypageResignMemberConfirm.path()}
			/>
			<ErrorNotificationProvider customId={pageId}>
				<ErrorBanner />
				<AuthGuard>{page}</AuthGuard>
			</ErrorNotificationProvider>
		</>
	);
};
