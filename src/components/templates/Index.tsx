import { ErrorTransformer } from "@/error/transformer/error.transformer";
import { useFetchPosts } from "@/core/repositories/post/postRepository";
import { FC } from "react";
import { PostIdErrorBoundary } from "./Posts/PostId/PostIdErrorBoundary";
import { findMembersOne } from "@/core/repositories/members/members.repository";

type Props = {};

export const IndexTemplate: FC<Props> = () => {
  // const { posts: data, error, isLoading } = useFetchPosts();
  findMembersOne({ status: "Active" });

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
