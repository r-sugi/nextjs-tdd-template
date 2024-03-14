import { Post } from "__fixtures__/posts/post.type";
import { apiClient } from "@/lib/apiClient";
import { ServerAppErrorErrorsFilter } from "@/error/filter/serverAppError.filter";
import { PagePropsType } from "./index.page";
import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async ({
  res,
}): Promise<{
  props: PagePropsType;
}> => {
  try {
    const { data } = await apiClient<Post[]>(`/posts`);

    if (!data) {
      throw new Error("?????");
    }

    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    // filterを呼ぶ
    const result = new ServerAppErrorErrorsFilter().catch(error);
    // HTTP status codeを設定する
    res.statusCode = result.redirectCode;

    return {
      props: {
        error: result,
      },
    };
  }
};
