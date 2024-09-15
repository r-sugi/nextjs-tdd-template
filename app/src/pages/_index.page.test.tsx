import { render } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";
import { publicPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/index/index";

import Page from "./index.page";

jest.mock("@/feature/index");

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
			titleText: publicPages.index.title(),
			descriptionText: publicPages.index.description(),
			ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.index.path()}`,
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
