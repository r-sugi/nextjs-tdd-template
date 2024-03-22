import type { NextApiRequest, NextApiResponse } from "next";
import * as getPost from "@/../__fixtures__/posts/getPost";
import { Post } from "__fixtures__/posts/post.type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  res.status(200).json(getPost.success.data);
}
