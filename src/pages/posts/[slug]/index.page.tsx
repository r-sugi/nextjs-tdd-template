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
import { HogeErrorBoundary } from "@/components/error/custom/PostIdErrorBoundary";

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

  if ("error" in props) {
    return <ServerErrorBoundary error={props.error} />;
  }

  return (
    <>
      {/* TODO: mswで値を返したらオプショナルチェーンを外す */}
      <Seo
        title={publicPages.postId.title(props.post.title ?? "")}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(props.post.id ?? "")}
      />
      {/* TODO: 個別Boundaryで囲む */}
      {/* TODO: PostIdErrorScreen: エラーを受け取って描画するテンプレートを用意する */}
      <PostIdErrorBoundary render={PostIdErrorScreen}>
        <PostIdTemplate post={props.post} />
      </PostIdErrorBoundary>
    </>
  );
};
export default PostId;
