import type { AppProps } from "next/app";
import Head from "next/head";

import { initializeFirebaseApp } from "@/lib/firebase";
import dynamic from "next/dynamic";
import { AppProvider } from "./_provider/_app.provider";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
	require("../../mocks");
}
const HeaderTemplate = dynamic(() => import("@/feature/header/index"), {
	ssr: false,
});

const isCSR = typeof window !== "undefined";

initializeFirebaseApp();

// TODO: SSRでヘッダー内の項目の表示非表示を制御する
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>
			<AppProvider>
				{/* 検証用のheader */}
				<HeaderTemplate />
				<Component {...pageProps} />
			</AppProvider>
		</>
	);
}
