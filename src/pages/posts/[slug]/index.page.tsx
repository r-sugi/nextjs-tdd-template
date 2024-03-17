import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { Post } from "__fixtures__/posts/post.type";
import type { NextPage } from "next";
import {
  ServerAppErrorErrorsFilter,
  ServerErrorResult,
} from "@/error/filter/serverAppError.filter";
import { ServerLogger } from "@/lib/serverLogger";
import { ClientAppErrorErrorsFilter } from "@/error/filter/clientAppError.filter";
import { ServerErrorBoundary } from "@/components/error/custom/ServerErrorBoundary";
import { HogeErrorBoundary } from "@/components/error/custom/HogeErrorBoundary";

type Success = {
  post: Post;
};

type Failure = { error: ServerErrorResult };

// パイプ + key in で型を絞り込む
export type PagePropsType = Success | Failure;

export type PageType = NextPage<PagePropsType>;

const PostId: PageType = (props) => {
  if (typeof window === "undefined") {
    // TODO: vscodeのserver debugを試したい
    new ServerLogger().info("serverInfoTest1");
    const error: any = { cause: "serverErrorTest2" };
    new ServerAppErrorErrorsFilter().catch(error);
  } else {
    console.log("clientLogTest1");
    const error: any = { cause: "clientLogTest2" };
    new ClientAppErrorErrorsFilter().catch(error);
  }

  // client側処理
  // 検査例外(ビジネスロジックとしてエラーハンドリングできるもの)、非検査例外(ビジネスロジック外のエラー)でErrorBoundaryを使い分ける
  // type: Error はビジネスロジック。 NotificationBar などで通知
  // type: Critical はビジネスロジック。 全体 UI 表示。 HandleableErrorBoundary
  // type: Fatal は非ビジネスロジック（ネットワークエラーや Developer の実装ミス）。 全体 UI 表示。UnhandleabeErrorBoundary

  // const [aPost, setAPost] = useState<Post | undefined>(undefined);
  // useEffect(() => {
  //   const postId = "2"; // 一旦固定値
  //   // TODO: SWRを使う
  //   apiClient<Post>(`/post/${2}`).then((res) => {
  //     setAPost(res.data);
  //   });
  // }, []);

  if ("error" in props) {
    return <ServerErrorBoundary error={props.error} />;
  }

  try {
    // const postId = "2"; // 一旦固定値
    // const res = await apiClient<Post>(`/post/${postId}`);
  } catch (error: unknown) {
    // TODO: 検査例外
    const result = new ClientAppErrorErrorsFilter().catch(error);
    return <HogeErrorBoundary error={result} />;

    // TODO: 非検査例外（例: DBのメモリが足りない、DBの容量を超えた、NetworkErrorとか）
    // AppRESTErrorHandlerをErrorBoundaryに実装して、'unhandledrejection'イベント時にErrorBoundaryが表示されるようにする
    // 明示的にcatchできず、ランタイムで発生(throw)した際に自動的にErrorBoundaryが呼ばれる(と思う)
  }

  return (
    <>
      {/* TODO: mswで値を返したらオプショナルチェーンを外す */}
      <Seo
        title={publicPages.postId.title(props.post.title ?? "")}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(props.post.id ?? "")}
      />
      <PostIdTemplate post={props.post} />
    </>
  );
};
export default PostId;
