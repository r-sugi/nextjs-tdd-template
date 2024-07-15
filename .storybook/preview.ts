import "./globals.css";
import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";
import "tailwindcss/tailwind.css";

export const decorators = [withScreenshot];

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

export default preview;
