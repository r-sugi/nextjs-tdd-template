import { FC, ReactNode } from "react";
import { ServerErrorResult } from "@/error/transformer/serverAppError.transformer";

type Props = {
  error: ServerErrorResult;
  render?: (error: ServerErrorResult) => ReactNode | undefined;
};

export const ServerErrorBoundary: FC<Props> = (props: Props) => {
  if (props.render) {
    return props.render(props.error);
  }
  return <>{props.error}</>;
};
