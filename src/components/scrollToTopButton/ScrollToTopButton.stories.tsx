/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import { fn } from "@storybook/test";

import { ScrollToTopButton } from "./ScrollToTopButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Component/ScrollToTopButton",
	component: ScrollToTopButton,
	tags: ["autodocs"],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		onClick: fn(),
	},
};
