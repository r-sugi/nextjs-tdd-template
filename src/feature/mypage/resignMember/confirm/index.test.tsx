import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { toMock, toSpyWithMock } from "@/__testing__/helper";
import { getCache, removeCache } from "@/utils/cache";
import { NoCacheError } from "@/utils/cache/error";

import { loginRequiredPages, publicPages } from "@/const/paths";
import { outputErrorLog } from "@/error/outputErrorLog";
import { ResignMemberDocument } from "@/generated/graphql";
import { AppProvider } from "@/pages/_provider/_app.provider";
import { HttpResponse, graphql } from "msw";
import { setupServer } from "msw/node";
import * as router from "next/router";
import IndexTemplate from "./index";

jest.mock("@/utils/cache");
jest.mock("@/error/outputErrorLog");

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

	describe("キャッシュがない", () => {
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

	describe("キャッシュがある", () => {
		const formValues = {
			reasonType: "NO_USE",
			reasonDetail: "detail",
			agreement: true,
		};

		it("初期描画が変化していない", async () => {
			const { view } = setup();
			const viewRoot = await view.findByTestId("mypage-resign-member-confirm");
			expect(viewRoot).toBeVisible();
		});
		it("戻るボタンを押下するとページ遷移する", async () => {
			// Arrange
			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));

			// Act
			const { view } = setup();
			await userEvent.click(view.getByRole("button", { name: "戻る" }));

			// Assert
			expect(routerMock).toHaveBeenCalledWith(
				loginRequiredPages.mypageResignMemberInput.path(),
			);
		});

		it("フォーム送信に成功し、ページ遷移する", async () => {
			// Arrange
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

			// Act
			const { view } = setup();
			await userEvent.click(view.getByRole("button", { name: "退会する" }));

			// Assert
			expect(toMock(removeCache)).toHaveBeenCalled();
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(routerMock).toHaveBeenCalledWith(publicPages.index.path());
		});

		it("フォーム送信でエラーが発生し、エラーが表示される", async () => {
			// Arrange
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
						errors: [
							{
								message: "エラーが発生しました",
								locations: [],
								extensions: {
									code: "ERROR_CODE", // Provide an appropriate error code
									path: "mutation.path", // Provide a relevant path if necessary
								},
							},
						],
					});
				}),
			);
			const mockOutputErrorLog = toMock(outputErrorLog);

			// Act
			const { view } = setup();
			await userEvent.click(view.getByRole("button", { name: "退会する" }));

			// Assert
			expect(mockFn).toHaveBeenCalledTimes(1);
			expect(toMock(removeCache)).not.toHaveBeenCalled();
			expect(routerMock).not.toHaveBeenCalled();

			expect(mockOutputErrorLog).toHaveBeenCalled();

			await waitFor(() => {
				const errorBanner = view.getByTestId("error-banner");
				expect(errorBanner).toBeVisible();
			});
		});
	});
});
