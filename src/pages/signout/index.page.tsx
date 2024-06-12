import { publicPages } from "@/const/paths";
import { signOut } from "@/feature/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
	const router = useRouter();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			await signOut();
			await router.push(publicPages.signIn.path());
		})();
	}, []);

	return <>サインアウト中</>;
}
