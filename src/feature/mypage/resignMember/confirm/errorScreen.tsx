import { ReactNode } from 'react';

import { loginRequiredPages } from '@/const/paths';

export const ErrorScreen = ({
  error,
  onReset,
}: {
  error: Error;
  onReset: (path: string) => void;
}): ReactNode => {
  const path = loginRequiredPages.mypageResignMemberConfirm.path();
  const titleShort = loginRequiredPages.mypageResignMemberConfirm.titleShort();
  const rootTestId = `error-screen-${path}`;
  const inputPath = loginRequiredPages.mypageResignMemberInput.path();

  return (
    <div data-testid={rootTestId}>
      {titleShort}でエラーが発生しました
      <div>Error: {error.name}</div>
      <button onClick={() => onReset(inputPath)}>入力画面からやり直す</button>
    </div>
  );
};
