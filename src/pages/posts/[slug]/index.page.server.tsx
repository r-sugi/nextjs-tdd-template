import { GetServerSideProps } from "next/types";
import { apiClient } from "@/lib/apiClient";
import { ServerAppErrorTransformer } from "@/error/transformer/serverAppError.transformer";
import { PagePropsType } from "./index.page";
import { fetchPostById } from "@/repositories/post/postRepository";

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}): Promise<{
  props: PagePropsType;
}> => {
  const postId = params?.id;

  try {
    const { data } = await fetchPostById(`${postId}`);

    return {
      props: {
        post: data,
      },
    };
  } catch (error: unknown) {
    const result = new ServerAppErrorTransformer().transform(error);
    res.statusCode = result.resultStatus;

    return {
      props: {
        error: result,
      },
    };
  }
};
