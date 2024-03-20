import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { Post } from "__fixtures__/posts/post.type";
import type { NextPage } from "next";
import {
  ServerAppErrorTransformer,
  ServerErrorResult,
} from "@/error/transformer/serverAppError.transformer";
import { ServerLogger } from "@/lib/serverLogger";
import { ClientAppErrorTransformer } from "@/error/transformer/clientAppError.transformer";
import { ServerErrorBoundary } from "@/components/error/custom/ServerErrorBoundary";

type Success = {
  post: Post;
};

type Failure = { error: ServerErrorResult };

// パイプ + key in で型を絞り込む -> in で型を絞り込む
export type PagePropsType = Success | Failure;

export type PageType = NextPage<PagePropsType>;

const PostId: PageType = (props) => {
  // 下記は動作確認用のコード、削除予定。
  if (typeof window === "undefined") {
    new ServerLogger().info("serverInfoTest1");
    const error: any = { cause: "serverErrorTest2" };
    new ServerAppErrorTransformer().transform(error);
  } else {
    console.log("clientLogTest1");
    const error: any = { cause: "clientLogTest2" };
    new ClientAppErrorTransformer().transform(error);
  }

  if ("error" in props) {
    return <ServerErrorBoundary error={props.error} />;
  }

  return (
    <>
      <Seo
        title={publicPages.postId.title(props.post.title)}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(props.post.id)}
      />
      <PostIdTemplate post={props.post} />
    </>
  );
};
export default PostId;
