import { server } from "@/../mocks/server";
import { rest } from "msw";
import { getStaticProps } from "./Posts.page.api";
import * as getPosts from "@/../__fixtures__/posts/getPosts";
jest.mock("@/components/templates/Posts/Posts");

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("#getStaticProps", () => {
  it("success", async () => {
    // Arrange
    const mock = jest.fn();
    server.use(
      rest.get("/posts", (req, res, ctx) => {
        mock(req.params);
        return res(ctx.json(getPosts.success.data));
      })
    );
    const expected = { props: { posts: getPosts.success.data } };

    // Act
    const result = await getStaticProps();

    // Assert
    expect(result).toEqual(expected);
  });

  it.skip("error", async () => {
    const result = await getStaticProps();
  });
});
