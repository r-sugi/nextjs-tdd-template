import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { Post } from "__fixtures__/posts/post.type";
import type { NextPage } from "next";
import { ServerErrorResult } from "@/error/transformer/serverAppError.transformer";
import { getServerSideProps } from "./index.page.server";
export { getServerSideProps };
import { PostIdErrorScreen } from "./_index.page.error";
import { ServerErrorBoundary } from "@/pages/_server.error.boundary";
type Success = {
  post: Post;
};

type Failure = { error: ServerErrorResult };

export type PagePropsType = Success | Failure;

export type PageType = NextPage<PagePropsType>;

const PostId: PageType = (props) => {
  if ("error" in props) {
    return (
      <ServerErrorBoundary error={props.error} render={PostIdErrorScreen} />
    );
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
