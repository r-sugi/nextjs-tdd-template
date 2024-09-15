/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/tokens
 */

import React, { Fragment } from "react";

import { AspectRatio } from "./AspectRatio";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Tokens/AspectRatio",
	component: Fragment,
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => {
		return <AspectRatio />;
	},
};
