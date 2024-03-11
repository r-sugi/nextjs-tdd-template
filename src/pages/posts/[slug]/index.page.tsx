import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { Post } from "__fixtures__/posts/post.type";
import type { NextPage } from "next";
import { apiClient } from "@/lib/apiClient";

export type PagePropsType = {
  post: Post;
};

export type PageType = NextPage<PagePropsType>;

export const PostId: PageType = ({ post }) => {
  // 1 error受け取る
  // case 1 <CutomXXXErrorComponent />　推し clientでUI表示のみ
  // case 2 throwしたらErrorBoundary呼ばれる ErrorBoundaryは予期せぬエラー(非検査例外)のみを描画させる

  // client側処理
  // 検査例外(ビジネスロジックとしてエラーハンドリングできるもの)、非検査例外(ビジネスロジック外のエラー)でErrorBoundaryを使い分ける
  // type: Error はビジネスロジック。 NotificationBar などで通知
  // type: Critical はビジネスロジック。 全体 UI 表示。 HandleableErrorBoundary
  // type: Fatal は非ビジネスロジック（ネットワークエラーや Developer の実装ミス）。 全体 UI 表示。UnhandleabeErrorBoundary
  try {
    const postId = "2"; // 一旦固定値
    const res = await apiClient<Post>(`/post/${postId}`);
  } catch (error) {
    // TODO: 下記の流れは妥当か？
    // filterを呼ぶ(内部でcodeの判定、levelのセットをする)
    // ↓
    // throw errorされる
    // ↓
    // ErrorBoundaryが呼ばれる
    // ↓
    // <XXXErrorBoundary /> を描画させる
    /*
      前回のメモ
    */
    // if (error instanceof ClientAppError) {
    // }
    // TODO: 検査例外
    // throw new HttpError(res);
    // // エラー画面を表示する
    // // 検査例外専用のErrorXXXXBoundaryを用意しておく。
    // // throw してそのErrorBoundaryを呼び出す
    // TODO: 非検査例外（例: DBのメモリが足りない、DBの容量を超えた、NetworkErrorとか）
    // AppRESTErrorHandlerをErrorBoundaryに実装して、'unhandledrejection'イベント時にErrorBoundaryが表示されるようにする
    // throwするとErrorBoundaryが呼ばれると(思う)
  }

  return (
    <>
      {/* TODO: mswで値を返したらオプショナルチェーンを外す */}
      <Seo
        title={publicPages.postId.title(post?.title ?? "")}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(post?.id ?? "")}
      />
      <PostIdTemplate post={post} />
    </>
  );
};
export default PostId;
