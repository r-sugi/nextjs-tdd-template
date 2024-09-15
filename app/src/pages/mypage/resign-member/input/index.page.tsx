import { loginRequiredPages } from "app/src/const/paths";
import { Seo } from "app/src/pages/_seo/seo";
import dynamic from "next/dynamic";

const IndexTemplate = dynamic(
	() => import("app/src/feature/mypage/resignMember/input"),
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
	return (
		<>
			<Seo
				title={loginRequiredPages.mypageResignMemberInput.title()}
				description={loginRequiredPages.mypageResignMemberInput.description()}
				path={loginRequiredPages.mypageResignMemberInput.path()}
			/>
			<AuthGuard>
				<IndexTemplate />
			</AuthGuard>
		</>
	);
}
