/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import { ErrorText } from "./ErrorText";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Component/ErrorText",
	component: ErrorText,
	tags: ["autodocs"],
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {
		children: "＊エラーテキスト",
	},
};
