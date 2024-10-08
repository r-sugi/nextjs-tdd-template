import { publicPages } from "@/const/paths";
import { ErrorBanner } from "@/feature/error/banner/ErrorBanner";
import { ErrorNotificationProvider } from "@/feature/error/banner/ErrorNotificationContext";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("@/feature/signup/signup"), {
	ssr: false,
});
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});

export default function Index() {
	return <IndexTemplate />;
}

const pageId = "page-signup-index";

// レイアウト制御
Index.getLayout = function getLayout(page: ReactNode) {
	return (
		<>
			<Seo
				title={publicPages.signUp.title()}
				description={publicPages.signUp.description()}
				path={publicPages.signUp.path()}
			/>
			<ErrorNotificationProvider customId={pageId}>
				<ErrorBanner />
				<AuthGuard>{page}</AuthGuard>
			</ErrorNotificationProvider>
		</>
	);
};
