import { publicPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/index";

import { ErrorBanner } from "@/feature/error/banner/ErrorBanner";
import { ErrorNotificationProvider } from "@/feature/error/banner/ErrorNotificationContext";
import type { ReactNode } from "react";
import { Seo } from "./_seo/seo";

export default function Index() {
	return <IndexTemplate />;
}

const pageId = "page-index";

// レイアウト制御
Index.getLayout = function getLayout(page: ReactNode) {
	return (
		<>
			<Seo
				title={publicPages.index.title()}
				description={publicPages.index.description()}
				path={publicPages.index.path()}
			/>
			<ErrorNotificationProvider customId={pageId}>
				<ErrorBanner />
				{page}
			</ErrorNotificationProvider>
		</>
	);
};
