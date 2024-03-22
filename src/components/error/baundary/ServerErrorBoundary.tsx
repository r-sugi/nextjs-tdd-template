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
  return <>{props.error}</>;
};
