import { publicPages } from "@/const/paths";
import dynamic from "next/dynamic";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("@/feature/signup/signup"), {
	ssr: false,
});
const AuthGuard = dynamic(() => import("@/feature/auth/component/AuthGuard"), {
	ssr: false,
});

export default function Index() {
	return (
		<>
			<Seo
				title={publicPages.signUp.title()}
				description={publicPages.signUp.description()}
				path={publicPages.signUp.path()}
			/>
			<AuthGuard>
				<IndexTemplate />
			</AuthGuard>
		</>
	);
}
