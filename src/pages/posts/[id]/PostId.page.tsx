import { FC } from "react";
import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";

type Props = {};

export const PostId: FC<Props> = () => {
  return (
    <>
      <Seo
        title={publicPages.postId.title()}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(`1`)} // TODO: ここにパスを指定する
      />
      <PostIdTemplate />
    </>
  );
};
export default PostId;
