import { rest } from "msw";

export const handlers = [
  rest.get("/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          { id: 1, title: "title", body: "body" },
          { id: 2, title: "title", body: "body" },
          { id: 3, title: "title", body: "body" },
        ],
      }),
    )
  }),
];
