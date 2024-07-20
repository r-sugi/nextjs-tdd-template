import { GetMembersByStatusDocument } from "@/generated/graphql";
import type { Meta, StoryObj } from "@storybook/react";
import { screen } from "@storybook/testing-library";

import { graphql } from "msw";

import { fixtureGetMembersByStatus } from "mocks/fixtures/member";

import { IndexTemplate } from "./index";
import { StubAuthProvider } from "@/feature/auth/provider/StubAuthProvider";
import { stubAuthContext } from "mocks/fixtures/provider/useStubAuthContext";

export default {
	component: IndexTemplate,
	parameters: {
		// see https://storybook.js.org/docs/react/configure/story-layout
		layout: "padded", // available "fullscreen" and "centered"
	},
} as Meta<typeof IndexTemplate>;

type Story = StoryObj<typeof IndexTemplate>;

export const タブ切替: Story = {
	decorators: [
		(Story) => (
			<StubAuthProvider value={stubAuthContext.signedIn}>
				<Story />
			</StubAuthProvider>
		),
	],
	parameters: {
		screenshot: {
			waitFor: async () => {
				await screen.findByText("statusActivityId");
			},
		},
		msw: {
			handlers: [
				graphql.query(GetMembersByStatusDocument, (_, res, ctx) => {
					return res(ctx.data(fixtureGetMembersByStatus.data), ctx.delay(100));
				}),
			],
		},
	},
};
