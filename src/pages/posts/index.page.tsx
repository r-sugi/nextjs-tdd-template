import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import type { NextPage } from "next";
import type { Post } from "@/../__fixtures__/posts/post.type";
import { ClientAppErrorTransformer } from "@/error/transformer/clientAppError.transformer";
import {
  ServerAppErrorTransformer,
  ServerErrorResult,
} from "@/error/transformer/serverAppError.transformer";
import { ServerErrorBoundary } from "@/components/error/custom/ServerErrorBoundary";
import { ServerLogger } from "@/lib/serverLogger";

type Success = {
  posts: Post[];
};

type Failure = { error: ServerErrorResult };

export type PagePropsType = Success | Failure;

export type PageType = NextPage<PagePropsType>;

const Posts: PageType = (props) => {
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
        title={publicPages.posts.title()}
        description={publicPages.posts.description()}
        path={publicPages.posts.path()}
      />
      <PostsTemplate posts={props.posts} />
    </>
  );
};
export default Posts;
