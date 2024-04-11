import { ClientError } from "@/error/errors/clientError";
import { ReactNode } from "react";

type Props = {
  error: ClientError;
  onReset: () => void;
};

export const resignMemberErrorScreen = ({
  error,
  onReset,
}: Props): ReactNode => {
  return (
    <div>
      <h1>resignMemberErrorScreen</h1>
      <p>code: {error.code}</p>
      <p>message: {error.message}</p>
      <button onClick={onReset}>reset</button>
    </div>
  );
};
