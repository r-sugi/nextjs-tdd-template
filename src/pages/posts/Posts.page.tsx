import { FC } from "react";
import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";

type Props = {};

export const Posts: FC<Props> = () => {
  return (
    <>
      <Seo
        title={publicPages.posts.title()}
        description={publicPages.posts.description()}
        path={publicPages.posts.path()}
      />
      <PostsTemplate />
    </>
  );
};
export default Posts;
