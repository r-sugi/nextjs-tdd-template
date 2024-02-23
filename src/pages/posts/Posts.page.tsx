import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import type { NextPage } from "next";
import type { Post } from "@/../__fixtures__/posts/post.type";
export { getStaticProps } from "./Posts.page.api";

// TODO: ErrorBoundary
export type PagePropsType = {
  posts: Post[];
};

export type PageType = NextPage<PagePropsType>;

export const Posts: PageType = ({ posts }) => {
  return (
    <>
      <Seo
        title={publicPages.posts.title()}
        description={publicPages.posts.description()}
        path={publicPages.posts.path()}
      />
      <PostsTemplate posts={posts} />
    </>
  );
};
export default Posts;
