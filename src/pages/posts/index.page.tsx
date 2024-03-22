import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import dynamic from "next/dynamic";

const Posts = () => {
  const PostsTemplate = dynamic(
    () => import("@/components/templates/Posts/Posts"),
    {
      ssr: false,
    }
  );

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
