import { adminSecretPages } from "app/src/const/paths";
import { IndexTemplate } from "app/src/feature/admin/members/index/index";
import { ErrorBanner } from "app/src/feature/error/banner/ErrorBanner";
import { ErrorNotificationProvider } from "app/src/feature/error/banner/ErrorNotificationContext";
import { Seo } from "app/src/pages/_seo/seo";
import type { ReactNode } from "react";

export default function Index() {
	return <IndexTemplate />;
}

const pageId = "page-admin-members-index";

// レイアウト制御
Index.getLayout = function getLayout(page: ReactNode) {
	return (
		<>
			<Seo
				title={adminSecretPages.members.title()}
				description={adminSecretPages.members.description()}
				path={adminSecretPages.members.path()}
			/>
			<ErrorNotificationProvider customId={pageId}>
				<ErrorBanner />
				{page}
			</ErrorNotificationProvider>
		</>
	);
};
