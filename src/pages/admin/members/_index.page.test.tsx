import { render } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";
import { adminSecretPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/admin/members/index";

import Page from "./index.page";

jest.mock("@/feature/admin/members/index");

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
			titleText: adminSecretPages.members.title(),
			descriptionText: adminSecretPages.members.description(),
			ogUrlText: `${process.env.NEXT_HOST_URI}${adminSecretPages.members.path()}`,
		});

		const metaRobots = document.querySelector('meta[name="robots"]');
		expect(metaRobots).toBeInTheDocument();
		expect(metaRobots).toHaveAttribute("content", "all");
	});

	it("template file called", async () => {
		// Arrange
		const IndexTemplateMock = toMock(IndexTemplate);
		const COMPONENT_PROPS = {};

		// Act
		setup();

		// Assert
		expect(IndexTemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
	});
});
