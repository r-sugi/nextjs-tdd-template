import type { NextApiRequest, NextApiResponse } from "next";
import * as getPosts from "@/../__fixtures__/posts/getPosts";
import { Post } from "__fixtures__/posts/post.type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(getPosts.success.data);
}
