import { initialize, mswDecorator } from "msw-storybook-addon";

import React, { type FC, useEffect } from "react";
import "./globals.css";
import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import { worker } from "../mocks/browser";
import { AppProvider } from "../src/pages/_provider/_app.provider";

if (typeof global.process === "undefined") {
	worker.start();
}

initialize();

const preview: Preview = {
	decorators: [mswDecorator],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default {
	...preview,
	decorators: [
		(Story: FC) => {
			// https://github.com/mswjs/msw-storybook-addon/issues/82
			//mswのレスポンスを更新するために、各ストーリーでリロードする
			useEffect(() => {
				return () => window.location.reload();
			}, []);

			return (
				<AppProvider>
					<Story />
				</AppProvider>
			);
		},
	],
};
