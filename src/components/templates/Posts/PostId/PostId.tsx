import { ErrorTransformer } from "@/error/transformer/error.transformer";
import { FC } from "react";
import { PostIdErrorBoundary } from "./PostIdErrorBoundary";
import { PostIdErrorScreen } from "./PostIdErrorScreen";
import { useFetchPostById } from "@/repositories/post/postRepository";
import { useRouter } from "next/router";

export const PostId: FC<{}> = () => {
  const router = useRouter();
  const { post, error, isLoading } = useFetchPostById(
    router?.query?.id as string
  );

  if (error) {
    throw new ErrorTransformer().transform(error);
  }
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!post) {
    return <div>no data</div>;
  }

  return (
    <div>
      postId: {post.id} / postTitle: {post.title} / postBody: {post.body}
    </div>
  );
};

const PostIdTemplate = () => {
  return (
    <PostIdErrorBoundary render={PostIdErrorScreen}>
      <PostId />
    </PostIdErrorBoundary>
  );
};

export default PostIdTemplate;
