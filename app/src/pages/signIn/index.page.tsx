import { publicPages } from "app/src/const/paths";
import { ErrorBanner } from "app/src/feature/error/banner/ErrorBanner";
import { ErrorNotificationProvider } from "app/src/feature/error/banner/ErrorNotificationContext";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("app/src/feature/signIn/signin"), {
	ssr: false,
});
const AuthGuard = dynamic(
	() => import("app/src/feature/auth/component/AuthGuard"),
	{
		ssr: false,
	},
);

export default function Index() {
	return <IndexTemplate />;
}

const pageId = "page-signin-index";

// レイアウト制御
Index.getLayout = function getLayout(page: ReactNode) {
	return (
		<>
			<Seo
				title={publicPages.signIn.title()}
				description={publicPages.signIn.description()}
				path={publicPages.signIn.path()}
			/>
			<ErrorNotificationProvider customId={pageId}>
				<ErrorBanner />
				<AuthGuard>{page}</AuthGuard>
			</ErrorNotificationProvider>
		</>
	);
};
