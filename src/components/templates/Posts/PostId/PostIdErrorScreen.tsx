import { ClientError } from "@/error/transformer/clientAppError.transformer";
import { ReactNode } from "react";

type Props = {
  error: ClientError;
};

export const PostIdErrorScreen = ({ error }: Props): ReactNode => {
  return (
    <div>
      <h1>PostIdErrorScreen</h1>
      <p>code: {error.code}</p>
      <p>message: {error.message}</p>
    </div>
  );
};
