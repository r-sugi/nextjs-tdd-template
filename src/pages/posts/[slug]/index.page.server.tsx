import { HttpError } from "@/error/errors/http-error";
import { Post } from "__fixtures__/posts/post.type";
import { PagePropsType } from "./index.page";
import { GetStaticPropsContext } from "next/types";

// TODO: 400.tsx, 500.tsxはいつ呼ばれるのか？(下記でthrowしたら呼ばれる？)
// TODO: エラーをキャッチしてreturnする(+ page側でErrorComponentを使って表示する)
export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<{
  props: PagePropsType;
}> => {
  // TODO: なかった時のエラー処理?
  const postId = context?.params?.id;
  // controller層
  // 400エラーの場合 パラメータの型が不正(例: Intに変換できない文字列)
  //   client側でエラーを表示したい props -> return errorを返す
  //     メリット: エラーの内容をカスタマイズできる
  //     デメリット: エラーの内容のパターンを把握する必要がある(エラーコード XXX-100, メッセージ "")
  //   redirect -> 404, 500などへリダイレクトさせる
  //     メリット: 共通でエラーを表示しやすい
  //     デメリット: 特定のページでこの処理だけは別UIを表示したい場合、エラーの内容をカスタマイズしづらい

  try {
    const res = await fetch(`/post/${postId}`);
    // TODO: 型定義
    if (!res.ok) {
      const payload = (await res.json()) as Post;
      // redirect or client側でエラーを表示したい
    }
  } catch (error) {
    if (error instanceof ClientAppError) {
      // // 検査例外
      error;
      // redirect or client側でエラーを表示したい

      // TODO: ロギング + ログサービスaxiomに送る(critical, fatalのみ送る)
      // Logger.error('hogehoge')
    }
  }
};
