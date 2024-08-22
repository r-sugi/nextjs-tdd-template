import { toMock, toSpyWithMock } from "@/__testing__/helper";
import { loginRequiredPages } from "@/const/paths";
import { setCache } from "@/utils/cache";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as router from "next/router";
import IndexTemplate from "./index";

jest.mock("@/utils/cache");

describe("IndexTemplate", () => {
	const routerMock = jest.fn();

	afterEach(() => {
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

	function setup() {
		return {
			user: userEvent.setup(),
			view: render(<IndexTemplate />),
		};
	}

	describe("正常系", () => {
		describe("初期描画が変化していない", () => {
			const { view } = setup();
			expect(view.container).toMatchSnapshot();
		});

		describe("フォーム送信に成功する", () => {
			it("キャッシュに保存して、ページ遷移する", async () => {
				// Arrange
				const mockSetCache = toMock(setCache);
				const useRouterMockImplementation = () => ({
					push: routerMock,
				});
				toSpyWithMock(router, "useRouter", useRouterMockImplementation);

				// Act
				const { user, view } = setup();

				const reasonTypeSelectBox = await view.findByLabelText("退会理由");
				const reasonDetailInput = await view.findByLabelText("詳細");
				const agreeementCheckBox = await view.findByLabelText("同意する");
				await user.selectOptions(reasonTypeSelectBox, "その他");
				await user.type(reasonDetailInput, "使わないため");
				await user.click(agreeementCheckBox);

				const submitButton = await view.findByRole("button", {
					name: "退会する",
				});
				await user.click(submitButton);

				// Assert
				expect(mockSetCache).toHaveBeenCalledWith("resignMember", {
					reasonType: "OTHER",
					reasonDetail: "使わないため",
					agreement: true,
				});
				expect(routerMock).toHaveBeenCalledWith(
					loginRequiredPages.mypageResignMemberConfirm.path(),
				);
			});
		});
	});
});
