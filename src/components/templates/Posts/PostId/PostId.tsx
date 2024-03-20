import { ClientAppErrorTransformer } from "@/error/transformer/clientAppError.transformer";
import { Post } from "__fixtures__/posts/post.type";
import { FC } from "react";
import { PostIdErrorBoundary } from "@/components/error/custom/PostIdErrorBoundary";
import { PostIdErrorScreen } from "@/components/error/screen/PostIdErrorScreen";
import { fetchPostById } from "@/repositories/post/postRepository";

type Props = {
  post: Post;
};

export const PostId: FC<Props> = ({ post }) => {
  // TODO: apollo or SWRにする
  // try {
  //   const postId = "2"; // 一旦固定値
  //   const res = await fetchPostById(post.id);
  // } catch (error: unknown) {
  //   throw new ClientAppErrorTransformer().transform(error);
  // }

  return (
    <div>
      postId: {post.id} / postTitle: {post.title} / postBody: {post.body}
    </div>
  );
};

export const PostIdTemplate: FC<Props> = ({ post }) => {
  // 個別Boundary: エラーを受け取って描画するテンプレートを用意する
  return (
    <PostIdErrorBoundary render={PostIdErrorScreen}>
      <PostId post={post} />
    </PostIdErrorBoundary>
  );
};
