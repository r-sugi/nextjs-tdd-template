import { Post } from "__fixtures__/posts/post.type";
import type { GetStaticPropsResult } from "next";

type StaticPropsType = { posts: Post[] };

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<StaticPropsType>
> => {
  const res = await fetch("/posts");
  // TODO: 型定義
  const posts = (await res.json()) as Post[];
  // TODO: エラーの時の処理
  return {
    props: {
      posts,
    },
  };
};
