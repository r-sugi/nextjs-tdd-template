import { HttpError } from "@/error/errors/http-error";
import { Post } from "__fixtures__/posts/post.type";
import { PagePropsType } from "./Posts.page";

// TODO: 400.tsx, 500.tsxはいつ呼ばれるのか？(下記でthrowしたら呼ばれる？)
// TODO: エラーをキャッチしてreturnする(+ page側でErrorComponentを使って表示する)
export const getStaticProps = async (): Promise<{
  props: PagePropsType;
}> => {
  try {
    const res = await fetch("/posts");
    // TODO: 型定義
    const posts = (await res.json()) as Post[];
    if (!res.ok) throw new HttpError(res);

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    if (error instanceof HttpError) {
      // TODO: page側でカスタムエラーErrorComponentを使って表示する？(errorBoundaryを使ってここで使えないのか、、？)
      return { props: { posts: [], error: error.serialize() } };
    }
    // TODO: HttpError 以外の Error が発生した場合、Unhandled Error として_error.tsxが捉えるか(試して確認する)
    // TODO: 独自のErrorを作成する
    throw new Error("Unhandled Error");
  }
};
