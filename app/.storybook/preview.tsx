import React, { type FC, useEffect } from "react";
import "../src/styles/globals.css";
import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../src/pages/_provider/_app.provider";

import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	loaders: [mswLoader],
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
