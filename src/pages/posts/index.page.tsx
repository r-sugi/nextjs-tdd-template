import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import type { NextPage } from "next";
import type { Post } from "@/../__fixtures__/posts/post.type";
import { ServerErrorResult } from "@/error/transformer/serverAppError.transformer";
import { getServerSideProps } from "./index.page.server";
import { PostsErrorScreen } from "./_index.page.error";
import { ServerErrorBoundary } from "../_server.error.boundary";
export { getServerSideProps };

type Success = {
  posts: Post[];
};

type Failure = { error: ServerErrorResult };

export type PagePropsType = Success | Failure;

export type PageType = NextPage<PagePropsType>;

const Posts: PageType = (props) => {
  if ("error" in props) {
    return (
      <ServerErrorBoundary render={PostsErrorScreen} error={props.error} />
    );
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
