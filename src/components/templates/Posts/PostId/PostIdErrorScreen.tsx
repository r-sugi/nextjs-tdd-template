import { ClientError } from "@/error/transformer/error.transformer";
import { ReactNode } from "react";

type Props = {
  error: ClientError;
  onReset: () => void;
};

export const PostIdErrorScreen = ({ error, onReset }: Props): ReactNode => {
  return (
    <div>
      <h1>PostIdErrorScreen</h1>
      <p>code: {error.code}</p>
      <p>message: {error.message}</p>
      <button onClick={onReset}>reset</button>
    </div>
  );
};
