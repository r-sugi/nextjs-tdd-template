import { server } from "@/../mocks/server";
import { rest } from "msw";
import { getServerSideProps } from "./index.page.server";
import * as getPost from "@/../__fixtures__/posts/getPost";
import { GetServerSidePropsContext } from "next/types";
import { ParsedUrlQuery } from "querystring";
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
      rest.get("/api/posts/1", (req, res, ctx) => {
        mock(req.params);
        return res(ctx.json(getPost.success.data));
      })
    );
    const expected = { props: { post: getPost.success.data } };

    const context = {
      res: {
        statusCode: 0,
      },
      params: { id: "1" } as ParsedUrlQuery,
    } as GetServerSidePropsContext;

    // Act
    const result = await getServerSideProps(context);

    // Assert
    expect(mock).toHaveBeenCalled();
    expect(result).toEqual(expected);
  });

  describe("error", () => {
    it("HttpErrorがかえること", async () => {
      const mock = jest.fn();
      server.use(
        rest.get("/api/posts/1", (_req, res, ctx) => {
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
        params: { id: "1" } as ParsedUrlQuery,
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
