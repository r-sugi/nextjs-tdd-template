import { loginRequiredPages } from "@/const/paths";
import { Seo } from "@/pages/_seo/seo";
import dynamic from "next/dynamic";

const IndexTemplate = dynamic(
	() => import("@/feature/mypage/resignMember/input/"),
	{
		ssr: false,
	},
);
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});
const isCSR = typeof window !== "undefined";

export default function Index() {
	return (
		<>
			<Seo
				title={loginRequiredPages.mypageResignMemberInput.title()}
				description={loginRequiredPages.mypageResignMemberInput.description()}
				path={loginRequiredPages.mypageResignMemberInput.path()}
			/>
			{isCSR && (
				<AuthGuard>
					<IndexTemplate />
				</AuthGuard>
			)}
		</>
	);
}
