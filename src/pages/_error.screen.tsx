import { ReactNode } from "react";

export const ErrorScreen = ({ error }: { error: Error }): ReactNode => {
  return (
    <>
      Client Error Screen
      <div>{JSON.stringify(error, null, 2)}</div>
    </>
  );
};
