import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
	GetMembersByStatusDocument,
	ResignMemberDocument,
} from "@/generated/graphql";
import { AppProvider } from "@/pages/_provider/_app.provider";
import { fixtureGetMembersByStatus } from "@/mocks/fixtures/member";
import { HttpResponse, graphql } from "msw";
import { setupServer } from "msw/node";
import { IndexTemplate } from "./index";
jest.mock("@/utils/cache");

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => {
	jest.resetAllMocks();
	jest.restoreAllMocks();
	server.resetHandlers();
});
afterAll(() => server.close());

describe(IndexTemplate, () => {
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

	describe("正常系", () => {
		it("初期描画が変化していない", async () => {
			const mockFn = jest.fn();
			server.use(
				graphql.query(GetMembersByStatusDocument, ({ variables }) => {
					mockFn(variables);
					return HttpResponse.json({
						data: fixtureGetMembersByStatus.data,
					});
				}),
			);

			const { view } = setup();
			const viewRoot = await view.findByTestId("admin-members-index");
			expect(viewRoot).toBeVisible();
			expect(view.container).toMatchSnapshot();
		});
	});

	describe("異常系", () => {
		it("APIエラーを表示する", async () => {
			// Arrange
			const mockFn = jest.fn();
			server.use(
				graphql.query(GetMembersByStatusDocument, ({ variables }) => {
					mockFn(variables);
					return HttpResponse.json({
						errors: [],
					});
				}),
			);
			// Act
			const { view } = setup();

			// Assert
			const viewRoot = await view.findByTestId("admin-members-index-error");
			const errorEl = within(viewRoot).getByText(
				"CSR リクエストエラー: データ取得に失敗しました",
			);
			expect(errorEl).toBeVisible();
		});
	});
});
