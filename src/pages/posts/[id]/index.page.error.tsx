import { ServerErrorResult } from "@/error/transformer/serverAppError.transformer";
import { ReactNode } from "react";

export const PostIdErrorScreen = (error: ServerErrorResult): ReactNode => {
  return (
    <div>
      <h1>PostIdErrorScreen</h1>
      <p>code: {error.code}</p>
      <p>message: {error.message}</p>
      <p>myErrorMessage: {JSON.stringify(error.myErrorMessage, null, 2)}</p>
      <p>resultStatus: {error.resultStatus}</p>
    </div>
  );
};
