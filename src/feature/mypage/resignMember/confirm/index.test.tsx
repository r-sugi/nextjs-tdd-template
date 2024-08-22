import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { toMock, toSpyWithMock } from "@/__testing__/helper";
import { getCache, removeCache } from "@/utils/cache";
import { NoCacheError } from "@/utils/cache/error";

import { loginRequiredPages, publicPages } from "@/const/paths";
import { useResignMember } from "@/core/usecases/member/useResignMember.command";
import { ResignMemberDocument } from "@/generated/graphql";
import { AppProvider } from "@/pages/_provider/_app.provider";
import { HttpResponse, graphql } from "msw";
import { setupServer } from "msw/node";
import * as router from "next/router";
import IndexTemplate from "./index";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));
jest.mock("@/utils/cache");

describe(IndexTemplate, () => {
	const server = setupServer();
	beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
	afterEach(() => {
		jest.resetAllMocks();
		jest.restoreAllMocks();
		server.resetHandlers();
	});
	afterAll(() => server.close());

	const setup = () => {
		return {
			user: userEvent.setup(),
			view: render(
				<AppProvider>
					<IndexTemplate />
				</AppProvider>,
			),
		};
	};

	describe("no cache", () => {
		beforeEach(() => {
			toMock(getCache).mockImplementation(() => {
				throw new NoCacheError("Failed to get cache");
			});
		});
		it("render ErrorScreen", async () => {
			// Act
			const { view } = setup();

			// Assert
			const errorScreen = view.getByTestId("error-screen");
			expect(errorScreen).toBeVisible();
			expect(
				within(errorScreen).getByText("Error: NoCacheError"),
			).toBeVisible();
			expect(
				within(errorScreen).getByText("入力画面からやり直す"),
			).toBeVisible();
		});
	});

	describe("cache exists", () => {
		const formValues = {
			reasonType: "NO_USE",
			reasonDetail: "detail",
			agreement: true,
		};

		it("rendered with initial state", async () => {
			const { view } = setup();
			const viewRoot = await view.findByTestId("mypage-resign-member-confirm");
			expect(viewRoot).toBeVisible();
		});
		it("click back button then router.push called", async () => {
			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));

			const { view } = setup();
			await userEvent.click(view.getByRole("button", { name: "戻る" }));

			expect(routerMock).toHaveBeenCalledWith(
				loginRequiredPages.mypageResignMemberInput.path(),
			);
		});

		it("success API on submit", async () => {
			toMock(getCache).mockReturnValue(formValues);
			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));
			const mockFn = jest.fn();
			server.use(
				graphql.mutation(ResignMemberDocument, ({ variables }) => {
					mockFn(variables);
					return HttpResponse.json({
						data: {
							insert_memberStatusActivities_one: {
								memberResigned: {
									status: "RESIGNED",
									memberId: "memberId",
									memberResigned: {
										memberId: "memberId",
										reasonType: "NO_USE",
										agreement: true,
										reasonDetail: "detail",
									},
								},
							},
						},
					});
				}),
			);

			const { view } = setup();
			await userEvent.click(view.getByRole("button", { name: "退会する" }));

			expect(toMock(removeCache)).toHaveBeenCalled();
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(routerMock).toHaveBeenCalledWith(publicPages.index.path());
		});

		it("API error of resign on submit", async () => {
			toMock(getCache).mockReturnValue(formValues);
			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));
			const mockFn = jest.fn();
			server.use(
				graphql.mutation(ResignMemberDocument, ({ variables }) => {
					mockFn(variables);
					return HttpResponse.json({
						errors: [], // TODO: ここでエラーメッセージのもとになる値を返す
					});
				}),
			);

			const { view } = setup();
			await userEvent.click(view.getByRole("button", { name: "退会する" }));

			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(toMock(removeCache)).not.toHaveBeenCalled();
			expect(routerMock).not.toHaveBeenCalled();
			// TODO: ここでエラーメッセージが表示されることを確認したい
		});
	});
});
