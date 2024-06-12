import { loginRequiredPages } from "@/const/paths";

import dynamic from "next/dynamic";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("@/feature/mypage/index/index"), {
	ssr: false,
});
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});
const isCSR = typeof window !== "undefined";

export default function Index() {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypage.title()}
				description={loginRequiredPages.mypage.description()}
				path={loginRequiredPages.mypage.path()}
			/>
			{isCSR && (
				<AuthGuard>
					<IndexTemplate />
				</AuthGuard>
			)}
		</>
	);
}
