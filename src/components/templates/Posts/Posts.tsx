import { FC } from "react";
import { useFetchPosts } from "../../../repositories/post/postRepository";
import { ClientAppErrorTransformer } from "../../../error/transformer/clientAppError.transformer";

const PostsTemplate: FC<{}> = () => {
  const { posts, error, isLoading } = useFetchPosts();

  if (error) {
    throw new ClientAppErrorTransformer().transform(error);
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (posts == null) {
    return <div>no data</div>;
  }

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

export default PostsTemplate;
