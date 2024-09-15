import { render } from "@testing-library/react";

import { toMock } from "app/src/__testing__/helper";
import { assertSeoTags, mockNextHead } from "app/src/__testing__/seo-helper";
import { loginRequiredPages } from "app/src/const/paths";
import AuthGuard from "app/src/feature/auth/component/AuthGuard";
import Page from "./index.page";

jest.mock("@/feature/mypage/resignMember/input/");
jest.mock("@/feature/auth/component/AuthGuard");

describe(Page, () => {
	function setup() {
		return {
			view: render(<Page />),
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
			titleText: loginRequiredPages.mypageResignMemberInput.title(),
			descriptionText: loginRequiredPages.mypageResignMemberInput.description(),
			ogUrlText: `${process.env.NEXT_HOST_URI}${loginRequiredPages.mypageResignMemberInput.path()}`,
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
