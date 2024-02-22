import { FC, useEffect, useState } from "react";
import { Seo } from "@/components/Seo";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";

type Props = {};

type Post = {
  id: number;
  body: string;
  title: string;
};
// TODO: getStaticProps
// TODO: ErrorBoundary
export const Posts: FC<Props> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/posts").then(async (res) => {
      const data = await res.json();
      setPosts(data);
    });
  }, []);

  if (posts.length === 0) return "Loading...";

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
