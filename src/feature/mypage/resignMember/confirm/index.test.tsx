import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { toSpyWithMock } from "@/__testing__/helper";
import { loginRequiredPages } from "@/const/paths";
import { AppProvider } from "@/pages/_provider/_app.provider";
import * as cache from "@/utils/cache";
import { NoCacheError } from "@/utils/cache/error";

import { IndexTemplate } from ".";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));
jest.mock("@/utils/cache");

describe(IndexTemplate, () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	const setupComponent = () => {
		return {
			user: userEvent.setup(),
			component: render(
				<AppProvider>
					<IndexTemplate />
				</AppProvider>,
			),
		};
	};

	describe("no cache", () => {
		beforeEach(() => {
			toSpyWithMock(cache, "getCache", () => {
				throw new NoCacheError("Failed to get cache");
			});
		});
		it("render ErrorScreen", async () => {
			// Arrange
			const path = loginRequiredPages.mypageResignMemberConfirm.path();

			// Act
			const { component } = setupComponent();

			// Assert
			const componentRoot = component.queryByTestId(path);
			expect(componentRoot).toBe(null);

			const errorScreen = component.getByTestId(`error-screen-${path}`);
			expect(errorScreen).toBeVisible();
			expect(
				within(errorScreen).getByText(
					`${loginRequiredPages.mypageResignMemberConfirm.titleShort()}でエラーが発生しました`,
				),
			).toBeVisible();
			expect(
				within(errorScreen).getByText("Error: NoCacheError"),
			).toBeVisible();
			expect(
				within(errorScreen).getByText("入力画面からやり直す"),
			).toBeVisible();
		});
	});

	describe("cache exists", () => {
		beforeEach(() => {
			toSpyWithMock(cache, "getCache", () => {
				return {
					reasonType: "1",
					reasonDetail: "detail",
					agreement: true,
				};
			});
		});
		afterEach(() => {
			jest.resetAllMocks();
		});
		it("rendered with initial state", async () => {
			const { component } = setupComponent();

			const componentRoot = await component.findByTestId(
				loginRequiredPages.mypageResignMemberConfirm.path(),
			);
			expect(componentRoot).toBeVisible();
		});
	});
});
