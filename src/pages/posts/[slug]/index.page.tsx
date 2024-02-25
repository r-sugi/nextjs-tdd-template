import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { Post } from "__fixtures__/posts/post.type";
import type { NextPage } from "next";

export type PagePropsType = {
  post: Post;
};

export type PageType = NextPage<PagePropsType>;

export const PostId: PageType = ({ post }) => {
  return (
    <>
      <Seo
        title={publicPages.postId.title(post?.title ?? "")}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(post?.id ?? "")}
      />
      <PostIdTemplate post={post} />
    </>
  );
};
export default PostId;
