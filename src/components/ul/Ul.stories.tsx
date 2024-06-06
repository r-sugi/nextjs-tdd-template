/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from "react";

import { Ul } from "./Ul";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Component/Ul",
	component: Ul,
	tags: ["autodocs"],
} satisfies Meta<typeof Ul>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => {
		return (
			<Ul>
				<li>サンプルサンプル</li>
				<li>サンプルサンプル</li>
				<li>サンプルサンプル</li>
				<li>
					サンプルサンプル
					<Ul>
						<li>サンプルサンプル</li>
						<li>サンプルサンプル</li>
						<li>サンプルサンプル</li>
						<li>
							サンプルサンプル
							<Ul>
								<li>サンプルサンプル</li>
								<li>サンプルサンプル</li>
								<li>サンプルサンプル</li>
							</Ul>
						</li>
					</Ul>
				</li>
			</Ul>
		);
	},
};
