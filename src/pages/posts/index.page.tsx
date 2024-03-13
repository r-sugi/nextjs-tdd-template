import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import type { NextPage } from "next";
import type { Post } from "@/../__fixtures__/posts/post.type";
import { ClientAppErrorErrorsFilter } from "@/error/filter/clientAppError.filter";

export type PagePropsType = {
  posts: Post[];
};

export type PageType = NextPage<PagePropsType>;

// buildしてHTMLになる
export const Posts: PageType = ({ posts }) => {
  // TODO: カスタムErrorコンポーネントを呼ぶか(or ErrorBoundaryへ渡すか)で表示する(どっちがベストか？)
  // console.log({ error });
  // if (error) return <Error {...error} />;

  // 試しにfilterを呼んだ
  if (typeof window !== "undefined") {
    const error: any = { cause: "test" };
    new ClientAppErrorErrorsFilter().catch(error);
  }

  return (
    <>
      <Seo
        title={publicPages.posts.title()}
        description={publicPages.posts.description()}
        path={publicPages.posts.path()}
      />
      {/* TODO: mswで値を返したらnull判定を外す */}
      {/* client: SSRで静的な要素が読み込まれる + 動的なclient */}
      <PostsTemplate posts={posts ?? []} />
    </>
  );
};
export default Posts;
