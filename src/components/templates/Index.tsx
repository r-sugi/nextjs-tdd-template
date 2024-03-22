import { ErrorTransformer } from "@/error/transformer/error.transformer";
import { useFetchPosts } from "@/repositories/post/postRepository";
import { FC } from "react";
import { PostIdErrorBoundary } from "./Posts/PostId/PostIdErrorBoundary";

type Props = {};

export const IndexTemplate: FC<Props> = () => {
  const { posts: data, error, isLoading } = useFetchPosts();

  if (error) {
    throw new ErrorTransformer().transform(error);
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data) {
    return <div>no data</div>;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export const PostIdTemplate: FC<Props> = () => {
  return (
    <PostIdErrorBoundary>
      <IndexTemplate />
    </PostIdErrorBoundary>
  );
};
