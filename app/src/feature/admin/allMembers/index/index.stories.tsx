import type { Meta, StoryObj } from "@storybook/react";
import { GetAllMembersDocument } from "@/generated/graphql";

import { HttpResponse, graphql } from "msw";

import { StubAuthProvider } from "@/feature/auth/provider/StubAuthProvider";
import { stubAuthContext } from "@/mocks/fixtures/provider/useStubAuthContext";
import { IndexTemplate } from "./index";

export default {
	component: IndexTemplate,
	parameters: {
		// see https://storybook.js.org/docs/react/configure/story-layout
		layout: "padded", // available "fullscreen" and "centered"
	},
} as Meta<typeof IndexTemplate>;

type Story = StoryObj<typeof IndexTemplate>;

export const 一覧: Story = {
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
				graphql.query(GetAllMembersDocument, () => {
					return HttpResponse.json({
						"data": {
							"memberStatusActivityLatest": [
								{
									"status": "pendingActivation",
									"createdAt": "2024-04-15T11:19:39.944762+00:00",
									"id": "128f3ea5-962b-4119-9d5c-05084b103708",
									"memberId": "5422c606-4cca-4054-ac66-83b682c53584",
									"memberActive": null,
									"memberBanned": null,
									"memberPendingActivation": {
										"createdAt": "2024-04-15T11:34:46.135295+00:00",
										"email": "foo@sample.com",
										"memberId": "5422c606-4cca-4054-ac66-83b682c53584",
										"statusActivityId": "128f3ea5-962b-4119-9d5c-05084b103708",
										"__typename": "memberPendingActivation"
									},
									"memberResigned": null,
									"memberRestored": null,
									"__typename": "memberStatusActivityLatest"
								},
								{
									"status": "pendingActivation",
									"createdAt": "2024-04-20T04:11:58.03316+00:00",
									"id": "32833818-04fd-458e-a016-661bec557de6",
									"memberId": "f0f04501-dd5d-4418-9e2f-c3b0b62941f2",
									"memberActive": null,
									"memberBanned": null,
									"memberPendingActivation": {
										"createdAt": "2024-04-21T10:31:43.791215+00:00",
										"email": "hhhh@gmail.com",
										"memberId": "f0f04501-dd5d-4418-9e2f-c3b0b62941f2",
										"statusActivityId": "32833818-04fd-458e-a016-661bec557de6",
										"__typename": "memberPendingActivation"
									},
									"memberResigned": null,
									"memberRestored": null,
									"__typename": "memberStatusActivityLatest"
								},
								{
									"status": "active",
									"createdAt": "2024-06-10T15:55:16.675707+00:00",
									"id": "8a1432a1-bf3b-42a3-8eed-cf282216dba5",
									"memberId": "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
									"memberActive": {
										"statusActivityId": "8a1432a1-bf3b-42a3-8eed-cf282216dba5",
										"postalCode": "adfasdf",
										"memberId": "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1",
										"email": "iine@gmail.com",
										"createdAt": "2024-07-03T18:29:26.704147+00:00",
										"birthday": "2024-01-01T00:00:00+00:00",
										"address": "dddd",
										"__typename": "memberActive"
									},
									"memberBanned": null,
									"memberPendingActivation": null,
									"memberResigned": null,
									"memberRestored": null,
									"__typename": "memberStatusActivityLatest"
								},
								{
									"status": "ACTIVE",
									"createdAt": "2024-08-27T04:19:23.385546+00:00",
									"id": "76cf7606-b2a7-4bdc-8051-c704a9aeb68d",
									"memberId": "e9e9a455-a376-4a96-b99c-a024f7a0f9a3",
									"memberActive": {
										"statusActivityId": "76cf7606-b2a7-4bdc-8051-c704a9aeb68d",
										"postalCode": "2110111",
										"memberId": "e9e9a455-a376-4a96-b99c-a024f7a0f9a3",
										"email": "hoge@example.com",
										"createdAt": "2024-08-27T04:21:38.009136+00:00",
										"birthday": "2024-08-15T11:32:28.08079+00:00",
										"address": "dddd",
										"__typename": "memberActive"
									},
									"memberBanned": null,
									"memberPendingActivation": null,
									"memberResigned": null,
									"memberRestored": null,
									"__typename": "memberStatusActivityLatest"
								}
							]
						}
					});
				}),
			],
		},
	},
};
