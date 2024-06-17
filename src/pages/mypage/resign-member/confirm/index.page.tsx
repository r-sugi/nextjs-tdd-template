import { loginRequiredPages } from "@/const/paths";
import { Seo } from "@/pages/_seo/seo";
import dynamic from "next/dynamic";

const IndexTemplate = dynamic(
	() => import("@/feature/mypage/resignMember/confirm/"),
	{
		ssr: false,
	},
);
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});

export default function Index() {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypageResignMemberConfirm.title()}
				description={loginRequiredPages.mypageResignMemberConfirm.description()}
				path={loginRequiredPages.mypageResignMemberConfirm.path()}
			/>
			<AuthGuard>
				<IndexTemplate />
			</AuthGuard>
		</>
	);
}
