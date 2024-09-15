import type { Meta, StoryObj } from "@storybook/react";
import { GetMembersByStatusDocument } from "app/src/generated/graphql";

import { fixtureGetMembersByStatus } from "app/src/mocks/fixtures/member";
import { HttpResponse, graphql } from "msw";

import { StubAuthProvider } from "app/src/feature/auth/provider/StubAuthProvider";
import { stubAuthContext } from "app/src/mocks/fixtures/provider/useStubAuthContext";
import { IndexTemplate } from "./index";

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
		msw: {
			handlers: [
				graphql.query(GetMembersByStatusDocument, () => {
					return HttpResponse.json({
						data: fixtureGetMembersByStatus.data,
					});
				}),
			],
		},
	},
};
