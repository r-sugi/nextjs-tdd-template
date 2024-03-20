import { ServerAppErrorTransformer } from "@/error/transformer/serverAppError.transformer";
import { PagePropsType } from "./index.page";
import { GetServerSideProps } from "next/types";
import { fetchPosts } from "@/repositories/post/postRepository";

export const getServerSideProps: GetServerSideProps = async ({
  res,
}): Promise<{
  props: PagePropsType;
}> => {
  try {
    const { data } = await fetchPosts();

    return {
      props: {
        posts: data,
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
