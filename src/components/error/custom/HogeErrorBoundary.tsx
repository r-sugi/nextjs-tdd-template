import { FC } from "react";
import { ClientErrorResult } from "@/error/filter/clientAppError.filter";

type Props = {
  error: ClientErrorResult;
};

export const HogeErrorBoundary: FC<Props> = ({ error }) => {
  return <>{error}</>;
};
