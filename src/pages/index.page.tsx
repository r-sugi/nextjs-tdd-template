import { publicPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/index/";

import { Seo } from "./_seo/seo";

const Index = () => {
	return (
		<>
			<Seo
				title={publicPages.index.title()}
				description={publicPages.index.description()}
				path={publicPages.index.path()}
			/>
			<IndexTemplate />
		</>
	);
};

export default Index;
