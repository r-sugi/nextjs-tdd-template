import { ClientAppErrorTransformer } from "@/error/transformer/clientAppError.transformer";
import { Post } from "__fixtures__/posts/post.type";
import { FC } from "react";
import { PostIdErrorBoundary } from "./PostIdErrorBoundary";
import { PostIdErrorScreen } from "./PostIdErrorScreen";
import { useFetchPostById } from "@/repositories/post/postRepository";
type Props = {
  post: Post;
};

export const PostId: FC<Props> = ({ post }) => {
  const { post: data, error, isLoading } = useFetchPostById(post.id);

  if (error) {
    throw new ClientAppErrorTransformer().transform(error);
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>no data</div>;
  }

  return (
    <div>
      postId: {post.id} / postTitle: {post.title} / postBody: {post.body}
    </div>
  );
};

export const PostIdTemplate: FC<Props> = ({ post }) => {
  return (
    <PostIdErrorBoundary render={PostIdErrorScreen}>
      <PostId post={post} />
    </PostIdErrorBoundary>
  );
};
