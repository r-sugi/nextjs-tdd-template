import { ServerErrorResult } from "@/error/transformer/serverAppError.transformer";
import { ReactNode } from "react";

export const ServerPostIdErrorScreen = (
  error: ServerErrorResult
): ReactNode => {
  return (
    <div>
      <h1>PostIdErrorScreen</h1>
      <p>code: {error.code}</p>
      <p>message: {error.message}</p>
    </div>
  );
};
