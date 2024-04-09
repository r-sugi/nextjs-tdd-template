import { FC } from "react";
import { PostIdErrorBoundary } from "../../Posts/PostId/PostIdErrorBoundary";
import { resignMember } from "@/core/usecase/members/resignMember.usecase";

type Props = {};

export const IndexTemplate: FC<Props> = () => {
  // TODO: react-hook-formを使ってフォームを作成する
  const onClick = async () => {
    await resignMember();
  };

  return (
    <div>
      ResignMember template
      <button onClick={onClick}></button>
    </div>
  );
};

export const ResignMemberTemplate: FC<Props> = () => {
  return (
    <PostIdErrorBoundary>
      <IndexTemplate />
    </PostIdErrorBoundary>
  );
};
