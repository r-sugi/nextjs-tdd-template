import { publicPages } from "@/const/paths";
import dynamic from "next/dynamic";
import { Seo } from "../_seo/seo";

const IndexTemplate = dynamic(() => import("@/feature/signIn/signin"), {
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
				title={publicPages.signIn.title()}
				description={publicPages.signIn.description()}
				path={publicPages.signIn.path()}
			/>
			{isCSR && (
				<AuthGuard>
					<IndexTemplate />
				</AuthGuard>
			)}
		</>
	);
}
