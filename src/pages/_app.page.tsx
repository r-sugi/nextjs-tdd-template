import type { AppProps } from "next/app";
import Head from "next/head";

import { HeaderTemplate } from "@/feature/header/index";

import { initializeFirebaseApp } from "@/lib/firebase";
import { AppProvider } from "./_provider/_app.provider";
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
	require("../../mocks");
}

initializeFirebaseApp();
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
