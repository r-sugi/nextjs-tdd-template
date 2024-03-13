import { isServerAppError } from "@/error/errors/serverAppError";
import { ClientAppError } from "@/error/errors/client-app-error";
import { Post } from "__fixtures__/posts/post.type";
import { PagePropsType } from "./index.page";
import { GetServerSidePropsContext } from "next/types";
import { apiClient } from "@/lib/apiClient";
import { HttpError } from "@/error/errors/httpError";

// TODO: 400.tsx, 500.tsxはいつ呼ばれるのか？(下記でthrowしたら呼ばれる？)
export const getStaticProps = async (
  context: GetServerSidePropsContext
): Promise<{
  props: PagePropsType;
}> => {
  // controller層
  // TODO: 400エラーの場合 パラメータの型が不正(例: Intに変換できない文字列)
  const postId = context?.params?.id;

  try {
    const res = await apiClient<Post>(`/post/${postId}`);

    if (!res.data) {
      // failure
      // TODO: filterを呼ぶ(内部でcodeの判定、levelのセットをする)
      if (isServerAppError(res) && res.code == "XXXX") {
        throw new ClientAppError(res, { level: "error" });
      }
      if (isServerAppError(res) && res.code == "XXXX") {
        throw new ClientAppError(res, { level: "critical" });
      }
      if (isServerAppError(res) && res.code == "XXXX") {
        throw new ClientAppError(res, { level: "fatal" });
      }
    }
    // success
    return {
      props: {
        post: res.data,
      },
    };
  } catch (error) {
    // TODO: filterを呼ぶ(内部でcodeの判定、levelのセットをする)
    // TODO: エラーコードに応じてredirectする(400.tsx, 500.tsxなど)
    if (error instanceof HttpError) {
      throw new ClientAppError(error);
    }
    if (error instanceof ClientAppError) {
      throw new ClientAppError(error);
    }
    throw new ClientAppError(error, { level: "fatal" });
  }
};
