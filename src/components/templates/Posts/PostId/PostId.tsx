import { ClientAppErrorTransformer } from "@/error/transformer/clientAppError.transformer";
import { Post } from "__fixtures__/posts/post.type";
import { FC } from "react";
import { PostIdErrorBoundary } from "@/components/error/custom/PostIdErrorBoundary";
import { PostIdErrorScreen } from "@/components/error/screen/PostIdErrorScreen";

// メモ: client側処理
// 検査例外(ビジネスロジックとしてエラーハンドリングできるもの)、非検査例外(ビジネスロジック外のエラー)でErrorBoundaryを使い分ける
// type: Error はビジネスロジック。 NotificationBar などで通知
// type: Critical はビジネスロジック。 全体 UI 表示。 HandleableErrorBoundary
// type: Fatal は非ビジネスロジック（ネットワークエラーや Developer の実装ミス）。 全体 UI 表示。UnhandleabeErrorBoundary

type Props = {
  post: Post;
};

export const PostId: FC<Props> = ({ post }) => {
  try {
    // const postId = "2"; // 一旦固定値
    // const res = await apiClient<Post>(`/post/${postId}`);
  } catch (error: unknown) {
    throw new ClientAppErrorTransformer().transform(error);
  }

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
