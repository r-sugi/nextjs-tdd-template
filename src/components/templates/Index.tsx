import { FC } from "react";
import { PostIdErrorBoundary } from "./PostIdErrorBoundary";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { useRouter } from "next/router";

export const IndexTemplate: FC = () => {
  const router = useRouter();
  const { activeMember } = useFetchActiveMember({
    onError: async () => {
      await router.push("/login");
    },
  });

  // if (error) {
  //   throw new ErrorTransformer().transform(error);
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  // if (!data) {
  //   return <div>no data</div>;
  // }

  return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};

export const PostIdTemplate: FC = () => {
  return (
    <PostIdErrorBoundary>
      <IndexTemplate />
    </PostIdErrorBoundary>
  );
};
