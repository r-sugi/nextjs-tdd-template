/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from "react";

import { Ol } from "./Ol";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Component/Ol",
	component: Ol,
	tags: ["autodocs"],
} satisfies Meta<typeof Ol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => {
		return (
			<Ol>
				<li>サンプルサンプル</li>
				<li>サンプルサンプル</li>
				<li>サンプルサンプル</li>
				<li>
					サンプルサンプル
					<Ol>
						<li>サンプルサンプル</li>
						<li>サンプルサンプル</li>
						<li>サンプルサンプル</li>
						<li>サンプルサンプル</li>
					</Ol>
				</li>
			</Ol>
		);
	},
};
