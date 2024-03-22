// import { Seo } from "@/components/Seo";
// import { publicPages } from "@/paths";
import dynamic from "next/dynamic";

const PostId = () => {
  const PostIdTemplate = dynamic(
    () => import("@/components/templates/Posts/PostId/PostId"),
    {
      ssr: false,
    }
  );
  return (
    <>
      {/* <Seo
        title={publicPages.postId.title(props.post.title)}
        description={publicPages.postId.description()}
        path={publicPages.postId.path(props.post.id)}
      /> */}
      <PostIdTemplate />
    </>
  );
};
export default PostId;
