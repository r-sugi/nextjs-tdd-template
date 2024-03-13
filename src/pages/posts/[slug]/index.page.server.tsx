import { Post } from "__fixtures__/posts/post.type";
import { GetServerSidePropsContext } from "next/types";
import { apiClient } from "@/lib/apiClient";
import { ServerAppErrorErrorsFilter } from "@/error/filter/serverAppError.filter";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // TODO: vscodeのserver debugを試したい

  // controller層
  // TODO: 400エラーの場合 パラメータの型が不正(例: Intに変換できない文字列)
  const postId = context?.params?.id;

  try {
    const { data } = await apiClient<Post>(`/post/${postId}`);

    if (!data) {
      throw new Error("?????");
    }
    // if (!res.data) {
    //   // failure
    //   // TODO: filterを呼ぶ(内部でcodeの判定、levelのセットをする)
    //   if (isServerAppError(res) && res.code == "XXXX") {
    //     throw new ClientAppError(res, { level: "error" });
    //   }
    //   if (isServerAppError(res) && res.code == "XXXX") {
    //     throw new ClientAppError(res, { level: "critical" });
    //   }
    //   if (isServerAppError(res) && res.code == "XXXX") {
    //     throw new ClientAppError(res, { level: "fatal" });
    //   }
    // }

    // success
    return {
      props: {
        post: data,
      },
    };
  } catch (error: unknown) {
    // filterを呼ぶ
    const result = new ServerAppErrorErrorsFilter().catch(error);

    // redirectする(400.tsx, 500.tsxなど)
    return {
      // TODO: 表示する値も渡す
      redirect: {
        statusCode: result.redirectCode, // ステータスコード指定
      },
    };
  }
};
