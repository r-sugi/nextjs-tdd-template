import { FC } from "react";

const PostsTemplate: FC<{}> = () => {
  // if (error) {
  //   throw new ErrorTransformer().transform(error);
  // }
  // if (loading) {
  //   return <div>loading...</div>;
  // }
  // if (data?.table_tennis_tables == null) {
  //   return <div>no data</div>;
  // }

  return (
    <>
      <div>PostsTemplate</div>
      {/* <ul>
        {data?.table_tennis_tables.map((table) => (
          <li key={table.id}>{table.name}</li>
        ))}
      </ul> */}
    </>
  );
};

export default PostsTemplate;
