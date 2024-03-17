import { FC, ReactNode } from "react";
import { ServerErrorResult } from "@/error/filter/serverAppError.filter";

type Props = {
  error: ServerErrorResult;
  render?: (error: ServerErrorResult) => ReactNode | undefined;
};

// TODO:
function hoge(props: Props) {
  // TODO: 個別レンダーパターンで描画する
  if (props.render) {
    return props.render(props.error);
  }
  // TODO: デフォルトレンダーパターンで描画する
  return <>{props.error}</>;
}

// code, myErrorMessage, resultStatus
// エラーとステータスコードに応じたエラーページを表示する
export const ServerErrorBoundary: FC<Props> = (props: Props) => {
  return hoge(props);
};
