import { fetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useFetchMembers } from "@/core/usecases/member/useFetchMembers.query";
import { FC } from "react";

export const IndexTemplate: FC = () => {
  // TODO: タブを切り替えたら、statusを変更してfetchする
  const { members } = useFetchMembers({ status: "banned" });

  // if (error) {
  //   throw new ErrorTransformer().transform(error);
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  // if (!data) {
  //   return <div>no data</div>;
  // }

  return (
    <div>
      <ul>
        {members.map((member) => {
          return (
            <li key={member.createdAt}>{JSON.stringify(member, null, 2)}</li>
          );
        })}
      </ul>
    </div>
  );
};

export const PostIdTemplate: FC = () => {
  return <IndexTemplate />;
};
