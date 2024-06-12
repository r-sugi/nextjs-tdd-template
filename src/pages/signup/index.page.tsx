import { publicPages } from "@/const/paths";
import { SignUpTemplate } from "@/feature/signup/signup";
import { Seo } from "../_seo/seo";

export default function Index() {
	return (
		<>
			<Seo
				title={publicPages.signUp.title()}
				description={publicPages.signUp.description()}
				path={publicPages.signUp.path()}
			/>
			<SignUpTemplate />
		</>
	);
}
