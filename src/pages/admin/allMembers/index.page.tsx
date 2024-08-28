import { adminSecretPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/admin/allMembers/index";
import { Seo } from "@/pages/_seo/seo";

export default function Index() {
	return (
		<>
			<Seo
				title={adminSecretPages.members.title()}
				description={adminSecretPages.members.description()}
				path={adminSecretPages.members.path()}
			/>
			<IndexTemplate />
		</>
	);
}
