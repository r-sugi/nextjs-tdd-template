import { Post } from "__fixtures__/posts/post.type";
import { FC } from "react";

type Props = {
  post: Post;
};

export const PostIdTemplate: FC<Props> = () => {
  return <div>PostIdTemplate</div>;
};
