import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import type { NextPage } from "next";
import type { Post } from "@/../__fixtures__/posts/post.type";
import { HttpErrorObject } from "@/error/errors/http-error";
export { getStaticProps } from "./Posts.page.api";

export type PagePropsType = {
  posts: Post[];
  error?: HttpErrorObject;
};

export type PageType = NextPage<PagePropsType>;

export const Posts: PageType = ({ posts, error }) => {
  // TODO: カスタムErrorコンポーネントを呼ぶか(or ErrorBoundaryへ渡すか)で表示する(どっちがベストか？)
  // console.log({ error });
  // if (error) return <Error {...error} />;

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
