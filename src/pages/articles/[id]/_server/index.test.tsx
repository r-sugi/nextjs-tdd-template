import { toMock } from "@/__testing__/helper";
import { fetchArticleById } from "@/core/repositories/article/articles.repository";
import { mockArticle1 } from "mocks/fixtures/article";
import { getServerSideProps } from "./index";
import { transformError } from "./transformError";

jest.mock("@/core/repositories/article/articles.repository");
jest.mock("./transformError");

describe(getServerSideProps, () => {
	beforeAll(() => {});

	afterEach(() => {
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

	describe("正常系", () => {
		it("取得したデータを返却する", async () => {
			// Arrange
			const context = {
				res: {
					statusCode: 200,
				},
				params: {
					id: "1",
				},
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} as any;
			const fetcherMock = toMock(fetchArticleById).mockResolvedValue({
				response: {
					data: mockArticle1,
					status: 200,
					statusText: "OK",
				},
			});

			// Act
			const res = await getServerSideProps(context);

			// Assert
			expect(fetcherMock).toHaveBeenCalled();
			expect(res).toEqual({
				props: {
					article: mockArticle1,
				},
			});
			expect(context.res.statusCode).toBe(200);
		});
	});

	describe("異常系", () => {
		describe("パラメータが不正", () => {
			it("400エラーの値を返す", async () => {
				// Arrange
				const context = {
					res: {
						statusCode: 200,
					},
					params: {
						id: "aaaaa",
					},
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				} as any;
				const fetcherMock = toMock(fetchArticleById);
				toMock(transformError).mockReturnValue({
					status: 400,
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				} as any);

				// Act
				const res = await getServerSideProps(context);

				// Assert
				expect(fetcherMock).not.toHaveBeenCalled();
				expect(context.res.statusCode).toBe(400);
				expect(transformError).toHaveBeenCalled();
				expect(res).toEqual({
					props: {
						error: {
							status: 400,
						},
					},
				});
			});
		});

		describe("fetchエラー", () => {
			it("エラーコードの値を返す", async () => {
				// Arrange
				const context = {
					res: {
						statusCode: 200,
					},
					params: {
						id: "1",
					},
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				} as any;
				const fetcherMock = toMock(fetchArticleById).mockResolvedValue({
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					error: {} as any,
				});
				toMock(transformError).mockReturnValue({
					status: 404,
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				} as any);

				// Act
				const res = await getServerSideProps(context);

				// Assert
				expect(fetcherMock).toHaveBeenCalled();
				expect(context.res.statusCode).toBe(404);
				expect(transformError).toHaveBeenCalled();
				expect(res).toEqual({
					props: {
						error: {
							status: 404,
						},
					},
				});
			});
		});
	});
});
