import { rest } from "msw";
import * as getPosts from "@/../__fixtures__/posts/getPosts";
import * as getPost from "@/../__fixtures__/posts/getPost";

export const handlers = [
  rest.get("/posts", (_, res, ctx) => {
    return res(ctx.json(getPosts.success.data));
  }),
  rest.get("/posts/1", (_, res, ctx) => {
    return res(ctx.json(getPost.success.data));
  }),
];
