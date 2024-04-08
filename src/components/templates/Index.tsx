import { FC } from "react";
import { PostIdErrorBoundary } from "./Posts/PostId/PostIdErrorBoundary";
import { fetchActiveMember } from "@/core/usecase/members/fetchActiveMember.usecase";

type Props = {};

export const IndexTemplate: FC<Props> = () => {
  // const { posts: data, error, isLoading } = useFetchPosts();
  const res = fetchActiveMember();

  // if (error) {
  //   throw new ErrorTransformer().transform(error);
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  // if (!data) {
  //   return <div>no data</div>;
  // }

  return <div>{JSON.stringify({}, null, 2)}</div>;
};

export const PostIdTemplate: FC<Props> = () => {
  return (
    <PostIdErrorBoundary>
      <IndexTemplate />
    </PostIdErrorBoundary>
  );
};
