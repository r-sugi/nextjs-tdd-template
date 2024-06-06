import { loginRequiredPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/mypage/index/";

import { Seo } from "../_seo/seo";

export default function Index() {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypage.title()}
				description={loginRequiredPages.mypage.description()}
				path={loginRequiredPages.mypage.path()}
			/>
			<IndexTemplate />;
		</>
	);
}
