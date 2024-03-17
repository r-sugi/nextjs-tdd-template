import { Post } from "__fixtures__/posts/post.type";
import { GetServerSideProps } from "next/types";
import { apiClient } from "@/lib/apiClient";
import { ServerAppErrorErrorsFilter } from "@/error/filter/serverAppError.filter";
import { PagePropsType } from "./index.page";

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}): Promise<{
  props: PagePropsType;
}> => {
  // TODO: vscodeのserver debugを試したい

  // controller層
  // TODO: 400エラーの場合 パラメータの型が不正(例: Intに変換できない文字列)
  const postId = params?.id;

  try {
    // TODO: findPostByIdでラップしてコールする
    const { data } = await apiClient<Post>(`/post/${postId}`);

    // success
    return {
      props: {
        post: data,
      },
    };
  } catch (error: unknown) {
    // filterを呼ぶ
    const result = new ServerAppErrorErrorsFilter().catch(error);
    // HTTP status codeを設定する
    res.statusCode = result.resultStatus;

    return {
      props: {
        error: result,
      },
    };
  }
};
