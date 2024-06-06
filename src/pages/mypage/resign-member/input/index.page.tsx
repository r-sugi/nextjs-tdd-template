import { loginRequiredPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/mypage/resignMember/input/";
import { Seo } from "@/pages/_seo/seo";

export default function Index() {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypageResignMemberInput.title()}
				description={loginRequiredPages.mypageResignMemberInput.description()}
				path={loginRequiredPages.mypageResignMemberInput.path()}
			/>
			<IndexTemplate />;
		</>
	);
}
