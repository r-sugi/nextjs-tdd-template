import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { toMock, toSpyWithMock } from "@/__testing__/helper";
import { getCache, removeCache } from "@/utils/cache";
import { NoCacheError } from "@/utils/cache/error";

import { loginRequiredPages, publicPages } from "@/const/paths";
import { useResignMember } from "@/core/usecases/member/useResignMember.command";
import * as router from "next/router";
import IndexTemplate from "./index";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));
jest.mock("@/utils/cache");
jest.mock("@/core/usecases/member/useResignMember.command");

// ブラックボックステストにする
describe(IndexTemplate, () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	const setupComponent = () => {
		return {
			user: userEvent.setup(),
			component: render(<IndexTemplate />),
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
			const { component } = setupComponent();

			// Assert
			const errorScreen = component.getByTestId("error-screen");
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
			const { component } = setupComponent();
			const componentRoot = await component.findByTestId("template");
			expect(componentRoot).toBeVisible();
		});
		it("click back button then router.push called", async () => {
			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));

			const { component } = setupComponent();
			await userEvent.click(component.getByRole("button", { name: "戻る" }));

			expect(routerMock).toHaveBeenCalledWith(
				loginRequiredPages.mypageResignMemberInput.path(),
			);
		});
		it("success API on submit", async () => {
			toMock(getCache).mockReturnValue(formValues);
			const resignHookMock = jest.fn().mockResolvedValue({
				data: {},
			});
			toMock(useResignMember).mockReturnValue(resignHookMock);

			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));

			const { component } = setupComponent();
			await userEvent.click(
				component.getByRole("button", { name: "退会する" }),
			);

			expect(resignHookMock).toHaveBeenCalledWith(formValues);
			expect(toMock(removeCache)).toHaveBeenCalled();
			expect(routerMock).toHaveBeenCalledWith(publicPages.index.path());
		});

		it("API error of resign on submit", async () => {
			toMock(getCache).mockReturnValue(formValues);
			const routerMock = jest.fn();
			toSpyWithMock(router, "useRouter", () => ({
				push: routerMock,
			}));

			const resignHookMock = jest.fn().mockResolvedValue({ data: null });
			toMock(useResignMember).mockReturnValue(resignHookMock);

			const { component } = setupComponent();
			await userEvent.click(
				component.getByRole("button", { name: "退会する" }),
			);

			expect(toMock(removeCache)).not.toHaveBeenCalled();
			expect(routerMock).not.toHaveBeenCalled();
		});
	});
});
