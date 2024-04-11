import { FC } from "react";
import { PostIdErrorBoundary } from "./PostIdErrorBoundary";
import { PostIdErrorScreen } from "./PostIdErrorScreen";

export const PostId: FC<{}> = () => {
  // const router = useRouter();
  // const { post, error, isLoading } = useFetchPostById(
  //   router?.query?.id as string
  // );

  // if (error) {
  //   throw new ErrorTransformer().transform(error);
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  // if (!post) {
  //   return <div>no data</div>;
  // }

  return <div>postId: / postTitle: / postBody:</div>;
};

const PostIdTemplate = () => {
  return (
    <PostIdErrorBoundary render={PostIdErrorScreen}>
      <PostId />
    </PostIdErrorBoundary>
  );
};

export default PostIdTemplate;
