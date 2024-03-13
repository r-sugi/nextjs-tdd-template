import { server } from "@/../mocks/server";
import { rest } from "msw";
import { getServerSideProps } from "./index.page.server";
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
    const result = await getServerSideProps();

    // Assert
    expect(result).toStrictEqual(expected);
  });

  describe("error", () => {
    it("HttpErrorがかえること", async () => {
      const mock = jest.fn();
      server.use(
        rest.get("/posts", (_req, res, ctx) => {
          mock();
          return res(
            ctx.status(400),
            ctx.json({
              errorMessage: "error",
            })
          );
        })
      );

      await expect(getServerSideProps).rejects.toThrow("HttpError");
      expect(mock).toHaveBeenCalled();
    });

    it("errorがかえること", async () => {
      const mock = jest.fn();
      server.use(
        rest.get("/posts", (_req, res, _ctx) => {
          mock();
          return res.networkError("Failed to connect");
        })
      );

      await expect(getServerSideProps).rejects.toThrow("Unhandled Error");
      expect(mock).toHaveBeenCalled();
    });
  });
});
