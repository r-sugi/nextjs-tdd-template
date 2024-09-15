import type { Meta, StoryObj } from "@storybook/react";
import { createMock, getOriginal } from "storybook-addon-module-mock";
import { ErrorBanner } from "./ErrorBanner";
import * as ErrorNotificationContext from "./ErrorNotificationContext";

export default {
	component: ErrorBanner,
	parameters: {
		// see https://storybook.js.org/docs/react/configure/story-layout
		layout: "padded", // available "fullscreen" and "centered"
	},
} as Meta<typeof ErrorBanner>;

type Story = StoryObj<typeof ErrorBanner>;

export const デフォルト: Story = {
	parameters: {
		moduleMock: {
			mock: () => {
				const mock = createMock(
					ErrorNotificationContext,
					"useErrorNotificationContext",
				);
				mock.mockImplementation(() => {
					const result = getOriginal(mock)();
					return {
						...result,
						items: [
							{
								message: "予期せぬエラーが発生しました。",
								myErrorCode: "EE-99",
							},
						],
					};
				});
				return [mock];
			},
		},
	},
};
