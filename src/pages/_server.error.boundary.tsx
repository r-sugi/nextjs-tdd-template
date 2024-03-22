import { FC, ReactNode } from "react";
import { ServerErrorResult } from "@/error/transformer/serverAppError.transformer";

type Props = {
  error: ServerErrorResult;
  render?: (error: ServerErrorResult) => ReactNode | undefined;
};

export const ServerErrorBoundary: FC<Props> = (props: Props) => {
  // 個別テンプレートを指定する場合
  if (props.render) {
    return props.render(props.error);
  }
  // デフォルトテンプレートを表示する場合
  return (
    <div>
      <h1>ServerErrorScreen</h1>
      <p>code: {props.error.code}</p>
      <p>message: {props.error.message}</p>
      <p>
        myErrorMessage: {JSON.stringify(props.error.myErrorMessage, null, 2)}
      </p>
      <p>resultStatus: {props.error.resultStatus}</p>
    </div>
  );
};
