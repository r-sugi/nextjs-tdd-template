import { render } from "@testing-library/react";

import { toMock } from "app/src/__testing__/helper";
import { assertSeoTags, mockNextHead } from "app/src/__testing__/seo-helper";
import { publicPages } from "app/src/const/paths";
import { mockArticle1 } from "app/src/mocks/fixtures/article";
import { ServerErrorBoundary } from "app/src/pages/_error/_server/_error.boundary";
import { ServerErrorScreen } from "./_server/errorScreen";
import Page, { type PagePropsType } from "./index.page";

jest.mock("@/pages/_error/_server/_error.boundary");
jest.mock("@/pages/articles/[id]/_server/errorScreen");

describe(Page, () => {
	function setup(props: PagePropsType) {
		return {
			view: render(<Page {...props} />),
		};
	}

	beforeAll(() => {
		mockNextHead();
	});

	afterEach(() => {
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

	describe("正常系", () => {
		it("SEO tag rendered", async () => {
			// Arrange
			const props: PagePropsType = {
				article: mockArticle1,
			};

			// Act
			setup(props);

			// Assert
			assertSeoTags({
				titleText: publicPages.articleDetail.title(props.article.title),
				descriptionText: publicPages.articleDetail.description(
					props.article.description,
				),
				ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.articleDetail.path(props.article.id)}`,
			});

			const metaRobots = document.querySelector('meta[name="robots"]');
			expect(metaRobots).toBeInTheDocument();
			expect(metaRobots).toHaveAttribute("content", "all");
		});

		it("template file called", async () => {
			// Arrange
			const props: PagePropsType = {
				article: mockArticle1,
			};

			// Act
			const { view } = setup(props);

			// Assert
			expect(
				view.getByText(`ArticleDetail: ${mockArticle1.title}`),
			).toBeVisible();
		});
	});

	describe("異常系", () => {
		it("エラー処理が表示されること", async () => {
			// Arrange
			const errorBoundaryMock = toMock(ServerErrorBoundary);
			const errorScreenMock = toMock(ServerErrorScreen);

			const props: PagePropsType = {
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				error: {} as any,
			};

			// Act
			setup(props);

			// Assert
			expect(errorBoundaryMock).toHaveBeenCalledWith(
				{
					error: {},
					render: errorScreenMock,
				},
				{},
			);
		});
	});
});
