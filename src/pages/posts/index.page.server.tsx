import { HttpError } from "@/error/errors/http-error";
import { Post } from "__fixtures__/posts/post.type";
import { PagePropsType } from "./index.page";

// TODO: 400.tsx, 500.tsxはいつ呼ばれるのか？(下記でthrowしたら呼ばれる？)
// TODO: エラーをキャッチしてreturnする(+ page側でErrorComponentを使って表示する)
// Server
export const getServerSideProps = async (): Promise<{
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
        error,
      },
    };
  } catch (error) {
    // TODO: サーバーサイドの秘匿情報が含まれる場合のエラー処理
    if (error instanceof HttpError) {
      // TODO: page側でカスタムエラーErrorComponentを使って表示する？(errorBoundaryを使ってここで使えないのか、、？)
      throw new Error("HttpError");
    }
    // TODO: HttpError 以外の Error が発生した場合、Unhandled Error として_error.tsxが捉えるか(試して確認する)
    // TODO: 独自のErrorを作成する
    throw new Error("Unhandled Error");
  }
};
