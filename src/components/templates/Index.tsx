import { FC } from "react";
import { PostIdErrorBoundary } from "./PostIdErrorBoundary";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { useRouter } from "next/router";

type Props = {};

export const IndexTemplate: FC<Props> = () => {
  const router = useRouter();
  const { activeMember } = useFetchActiveMember({
    onError: async () => {
      await router.push("/login");
    },
  });
  console.log(activeMember);

  // if (error) {
  //   throw new ErrorTransformer().transform(error);
  // }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }
  // if (!data) {
  //   return <div>no data</div>;
  // }

  return <div>{JSON.stringify({}, null, 2)}</div>;
};

export const PostIdTemplate: FC<Props> = () => {
  return (
    <PostIdErrorBoundary>
      <IndexTemplate />
    </PostIdErrorBoundary>
  );
};
