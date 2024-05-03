import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { toMock } from '@/__testing__/helper';
import { loginRequiredPages } from '@/const/paths';
import { AppProvider } from '@/pages/_provider/_app.provider';
import { getCache } from '@/utils/cache';

import { IndexTemplate } from '.';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
// FIXME: うまくmockさせたい
// jest.mock('../../../../utils/cache');

describe(IndexTemplate, () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const setupComponent = () => {
    return {
      user: userEvent.setup(),
      component: render(
        <AppProvider>
          <IndexTemplate />
        </AppProvider>,
      ),
    };
  };

  describe('no cache', () => {
    // FIXME: mockしたくない
    it('render ErrorScreen', async () => {
      // Arrange
      const path = loginRequiredPages.mypageResignMemberConfirm.path();

      // Act
      const { component } = setupComponent();

      // Assert
      const componentRoot = component.queryByTestId(path);
      expect(componentRoot).toBe(null);

      const errorScreen = component.getByTestId(`error-screen-${path}`);
      expect(errorScreen).toBeVisible();
      expect(
        within(errorScreen).getByText(
          `${loginRequiredPages.mypageResignMemberConfirm.titleShort()}でエラーが発生しました`,
        ),
      ).toBeVisible();
      expect(within(errorScreen).getByText(`Error: NoCacheError`)).toBeVisible();
      expect(within(errorScreen).getByText('入力画面からやり直す')).toBeVisible();
    });
  });

  describe.skip('cache exists', () => {
    beforeEach(() => {
      // FIXME: mockしたい
      toMock(getCache).mockReturnValue({
        reasonType: '1',
        reasonDetail: 'detail',
        agreement: true,
      });
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    it('rendered with initial state', async () => {
      const { component } = setupComponent();

      const componentRoot = await component.findByTestId(
        loginRequiredPages.mypageResignMemberConfirm.path(),
      );
      expect(componentRoot).toBeVisible();
    });
  });
});
