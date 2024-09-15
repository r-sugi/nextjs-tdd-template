import { render } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";
import { loginRequiredPages } from "@/const/paths";
import AuthGuard from "@/feature/auth/component/AuthGuard";

import Page from "./index.page";

jest.mock("@/feature/mypage/index/");
jest.mock("@/feature/auth/component/AuthGuard");

describe(Page, () => {
	function setup() {
		return {
			view: render(Page.getLayout(<Page />)),
		};
	}

	beforeAll(() => {
		mockNextHead();
	});

	afterEach(() => {
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

	it("SEO tag rendered", async () => {
		// Act
		setup();

		// Assert
		assertSeoTags({
			titleText: loginRequiredPages.mypage.title(),
			descriptionText: loginRequiredPages.mypage.description(),
			ogUrlText: `${process.env.NEXT_HOST_URI}${loginRequiredPages.mypage.path()}`,
		});

		const metaRobots = document.querySelector('meta[name="robots"]');
		expect(metaRobots).toBeInTheDocument();
		expect(metaRobots).toHaveAttribute("content", "all");
	});

	it("template file called", async () => {
		// Arrange
		const AuthGuardMock = toMock(AuthGuard);

		// Act
		setup();

		// Assert
		expect(AuthGuardMock).toHaveBeenCalled();
	});
});
