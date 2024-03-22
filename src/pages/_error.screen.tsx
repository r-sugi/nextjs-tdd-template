import { ClientError } from "@/error/transformer/clientAppError.transformer";
import { ReactNode } from "react";

export const ErrorScreen = ({ error }: { error: ClientError }): ReactNode => {
  return (
    <>
      ErrorScreen
      <div>{JSON.stringify(error, null, 2)}</div>
    </>
  );
};
