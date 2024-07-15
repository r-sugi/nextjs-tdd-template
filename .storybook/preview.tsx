import React, { useEffect } from "react";
import "./globals.css";
import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";
import "tailwindcss/tailwind.css";
import { worker } from "../mocks/browser";
import { AppApolloProvider } from "../src/pages/_provider/_appApollo.provider";

if (typeof global.process === "undefined") {
	worker.start();
}

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		screenshot: {
			// see: https://github.com/reg-viz/storycap?tab=readme-ov-file#type-variants
			fullPage: false,
			delay: 0,
			viewports: {
				desktop: { width: 1024, height: 768 },
				tablet: { width: 375, height: 668 },
				mobile: { width: 320, height: 568, isMobile: true, hasTouch: true },
			},
		},
	},
};

export default {
	...preview,
	decorators: [
		withScreenshot,
		(Story) => {
			// https://github.com/mswjs/msw-storybook-addon/issues/82
			//mswのレスポンスを更新するために、各ストーリーでリロードする
			useEffect(() => {
				return () => window.location.reload();
			}, []);

			return (
				// TODO: <AppProvider>を使いたい（AuthProviderをStubしたいができないため、一旦AppApolloProviderで対応した）
				// StubAuthProviderを使ってstorybook時は、(client firebaseは)stubされた関数を呼び出したい
				<AppApolloProvider>
					<Story />
				</AppApolloProvider>
			);
		},
	],
};
