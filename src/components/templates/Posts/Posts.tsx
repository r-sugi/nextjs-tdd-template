import { FC } from "react";
import { useFetchPosts } from "../../../repositories/post/postRepository";
import { ErrorTransformer } from "../../../error/transformer/error.transformer";
import { useGetTableTennisTablesQuery } from "@/generated/graphql";

const PostsTemplate: FC<{}> = () => {
  // repositoryを直接参照している
  const { data, loading, error } = useGetTableTennisTablesQuery();

  if (error) {
    throw new ErrorTransformer().transform(error);
  }
  if (loading) {
    return <div>loading...</div>;
  }
  if (data?.table_tennis_tables == null) {
    return <div>no data</div>;
  }

  return (
    <>
      <div>PostsTemplate</div>
      <ul>
        {data?.table_tennis_tables.map((table) => (
          <li key={table.id}>{table.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PostsTemplate;
