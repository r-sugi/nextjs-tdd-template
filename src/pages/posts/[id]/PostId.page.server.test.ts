import { server } from "@/../mocks/server";
import { rest } from "msw";
import { getStaticProps } from "./PostId.page.server";
import * as getPost from "@/../__fixtures__/posts/getPost";
jest.mock("@/components/templates/Posts/Posts");

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("#getStaticProps", () => {
  it("success", async () => {
    // Arrange
    const mock = jest.fn();
    server.use(
      rest.get("/post/1", (req, res, ctx) => {
        mock(req.params);
        return res(ctx.json(getPost.success.data));
      })
    );
    const expected = { props: { post: getPost.success.data } };

    // Act
    const result = await getStaticProps({ params: { id: "1" } });

    // Assert
    expect(result).toStrictEqual(expected);
  });

  describe("error", () => {
    it("HttpErrorがかえること", async () => {
      const mock = jest.fn();
      server.use(
        rest.get("/post/1", (_req, res, ctx) => {
          mock();
          return res(
            ctx.status(400),
            ctx.json({
              errorMessage: "error",
            })
          );
        })
      );

      await expect(() =>
        getStaticProps({ params: { id: "1" } })
      ).rejects.toThrow("HttpError");
      expect(mock).toHaveBeenCalled();
    });

    it("Unhandled errorがかえること", async () => {
      const mock = jest.fn();
      server.use(
        rest.get("/post/1", (_req, res, _ctx) => {
          mock();
          return res.networkError("Failed to connect");
        })
      );

      await expect(() =>
        getStaticProps({ params: { id: "1" } })
      ).rejects.toThrow("Unhandled Error");
      expect(mock).toHaveBeenCalled();
    });
  });
});
