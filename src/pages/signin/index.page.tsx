import { publicPages } from "@/const/paths";
import { SignInTemplate } from "@/feature/signIn/signin";
import { Seo } from "../_seo/seo";

export default function Index() {
	return (
		<>
			<Seo
				title={publicPages.signIn.title()}
				description={publicPages.signIn.description()}
				path={publicPages.signIn.path()}
			/>
			<SignInTemplate />
		</>
	);
}
