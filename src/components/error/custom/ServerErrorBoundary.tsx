import { FC } from "react";
import { ServerErrorResult } from "@/error/filter/serverAppError.filter";

type Props = {
  error?: ServerErrorResult;
};

export const ServerErrorBoundary: FC<Props> = ({ error }) => {
  return <>{error}</>;
};
