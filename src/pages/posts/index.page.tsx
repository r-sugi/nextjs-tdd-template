import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import type { NextPage } from "next";
import type { Post } from "@/../__fixtures__/posts/post.type";
import { ClientAppErrorErrorsFilter } from "@/error/filter/clientAppError.filter";
import {
  ServerAppErrorErrorsFilter,
  ServerErrorResult,
} from "@/error/filter/serverAppError.filter";
import { ServerErrorBoundary } from "@/components/error/custom/ServerErrorBoundary";
import { ServerLogger } from "@/lib/serverLogger";

export type PagePropsType = {
  posts?: Post[];
  error?: ServerErrorResult;
};

export type PageType = NextPage<PagePropsType>;

const Posts: PageType = ({ posts, error }) => {
  // 試しにfilterを呼んだ
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

  // カスタムErrorコンポーネントを呼ぶ
  if (error) return <ServerErrorBoundary error={error} />;

  return (
    <>
      <Seo
        title={publicPages.posts.title()}
        description={publicPages.posts.description()}
        path={publicPages.posts.path()}
      />
      {/* TODO: mswで値を返したらnull判定を外す */}
      <PostsTemplate posts={posts} />
    </>
  );
};
export default Posts;
