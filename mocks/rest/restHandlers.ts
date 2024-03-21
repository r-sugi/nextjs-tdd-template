import { rest } from "msw";
import * as getPosts from "@/../__fixtures__/posts/getPosts";
import * as getPost from "@/../__fixtures__/posts/getPost";

export const handlers = [
  rest.get("/api/posts", (_, res, ctx) => {
    return res(ctx.json(getPosts.success.data));
  }),
  rest.get("/api/posts/1", (_, res, ctx) => {
    return res(ctx.json(getPost.success.data));
  }),
];
