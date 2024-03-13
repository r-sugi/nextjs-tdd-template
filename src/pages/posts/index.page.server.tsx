import { Post } from "__fixtures__/posts/post.type";
import { apiClient } from "@/lib/apiClient";
import { ServerAppErrorErrorsFilter } from "@/error/filter/serverAppError.filter";

export const getServerSideProps = async () => {
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

    // redirectする(400.tsx, 500.tsxなど)
    return {
      // TODO: 表示する値も渡す
      redirect: {
        statusCode: result.redirectCode, // ステータスコード指定
      },
    };
  }
};
