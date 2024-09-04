import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { HeaderTemplate } from "@/feature/header";
import { initializeFirebaseApp } from "@/lib/firebase";
import { AppProvider } from "./_provider/_app.provider";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
	require("../../mocks");
}

initializeFirebaseApp();

type AppPropsWithLayout = AppProps & {
	Component: { getLayout?: (page: JSX.Element) => JSX.Element };
};

// TODO: SSRでヘッダー内の項目の表示非表示を制御したい
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<AppProvider>
				{/* 共通のヘッダーテンプレート */}
				<HeaderTemplate />
				{getLayout(<Component {...pageProps} />)}
			</AppProvider>
		</>
	);
}
