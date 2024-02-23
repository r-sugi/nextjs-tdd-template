import { Post } from "__fixtures__/posts/post.type";
import { FC } from "react";

type Props = {
  posts: Post[];
};

export const PostsTemplate: FC<Props> = ({ posts }) => {
  return (
    <>
      <div>PostsTemplate</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
