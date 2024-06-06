/*
 * （出典）出典：デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/
 *  https://github.com/digital-go-jp/design-system-example-components/tree/main/src/components
 */
import React from "react";

import { RequirementBadge } from "./RequirementBadge";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "Component/RequirementBadge",
	component: RequirementBadge,
	tags: ["autodocs"],
} satisfies Meta<typeof RequirementBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => {
		return (
			<div className="flex flex-col gap-8">
				<RequirementBadge>※必須</RequirementBadge>
				<RequirementBadge isOptional={true}>任意</RequirementBadge>
			</div>
		);
	},
};
