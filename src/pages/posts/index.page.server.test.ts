import { server } from "@/../mocks/server";
import { rest } from "msw";
import { getServerSideProps } from "./index.page.server";
import * as getPosts from "@/../__fixtures__/posts/getPosts";
import { GetServerSidePropsContext } from "next/types";
import { spyAndMock } from "@/__testing__/helper";
import { ServerAppErrorTransformer } from "@/error/transformer/serverAppError.transformer";
jest.mock("@/components/templates/Posts/Posts");

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("#getStaticProps", () => {
  it("success", async () => {
    // Arrange
    const mock = jest.fn();
    server.use(
      rest.get("/api/posts", (req, res, ctx) => {
        mock(req.params);
        return res(ctx.json(getPosts.success.data));
      })
    );
    const context = {
      res: {
        statusCode: 0,
      },
    } as GetServerSidePropsContext;

    const expected = { props: { posts: getPosts.success.data } };

    // Act
    const result = await getServerSideProps(context);

    // Assert
    expect(result).toEqual(expected);
  });

  describe("error", () => {
    it("HttpErrorがかえること", async () => {
      // Arrange
      const mock = jest.fn();
      server.use(
        rest.get("/api/posts", (_req, res, ctx) => {
          mock();
          return res(
            ctx.status(400),
            ctx.json({
              errorMessage: "error",
            })
          );
        })
      );
      const context = {
        res: {
          statusCode: 0,
        },
      } as GetServerSidePropsContext;

      const errorResult = {
        resultStatus: 400,
        errorMessage: "error",
      };

      spyAndMock(
        ServerAppErrorTransformer.prototype,
        "transform",
        () => errorResult
      );

      const expected = { props: { error: errorResult } };

      // Act
      const result = await getServerSideProps(context);

      // Assert
      expect(mock).toHaveBeenCalled();
      expect(result).toEqual(expected);
      expect(context.res.statusCode).toBe(400);
    });
  });
});
