import { HogeErrorBoundary } from "@/components/error/custom/PostIdErrorBoundary";
import { ClientAppErrorErrorsFilter } from "@/error/filter/clientAppError.filter";
import { Post } from "__fixtures__/posts/post.type";
import { FC } from "react";

type Props = {
  post: Post;
};

// TODO: PostIdErrorBoundary.tsxを別途定義する
// PostIdErrorBoundaryを定義して、内部でunhandledrejectionイベントをキャッチする -> serviryがfatailのみthrow Error(それ以外は個別表示する) -> 全体ErrorBoundary.tsx

export const PostIdTemplate: FC<Props> = ({ post }) => {
  // client側処理
  // 検査例外(ビジネスロジックとしてエラーハンドリングできるもの)、非検査例外(ビジネスロジック外のエラー)でErrorBoundaryを使い分ける
  // type: Error はビジネスロジック。 NotificationBar などで通知
  // type: Critical はビジネスロジック。 全体 UI 表示。 HandleableErrorBoundary
  // type: Fatal は非ビジネスロジック（ネットワークエラーや Developer の実装ミス）。 全体 UI 表示。UnhandleabeErrorBoundary

  // useState

  try {
    // const postId = "2"; // 一旦固定値
    // const res = await apiClient<Post>(`/post/${postId}`);
  } catch (error: unknown) {
    throw new ClientAppErrorErrorsFilter().catch(error);
  }

  return <div>PostIdTemplate</div>;
};
