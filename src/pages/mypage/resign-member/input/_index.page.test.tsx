import { render } from '@testing-library/react';

import { toMock } from '@/__testing__/helper';
import { assertSeoTags, mockNextHead } from '@/__testing__/seo-helper';
import { loginRequiredPages } from '@/const/paths';
import { IndexTemplate } from '@/feature/mypage/resignMember/input/';

import Page from './index.page';

jest.mock('@/feature/mypage/resignMember/input/');

describe(Page, () => {
  function setup() {
    return {
      view: render(<Page />),
    };
  }

  beforeAll(() => {
    mockNextHead();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('SEO tag rendered', async () => {
    // Act
    setup();

    // Assert
    assertSeoTags({
      titleText: loginRequiredPages.mypageResignMemberInput.title(),
      descriptionText: loginRequiredPages.mypageResignMemberInput.description(),
      ogUrlText: `${process.env.NEXT_HOST_URI}${loginRequiredPages.mypageResignMemberInput.path()}`,
    });

    const metaRobots = document.querySelector('meta[name="robots"]');
    expect(metaRobots).toBeInTheDocument();
    expect(metaRobots).toHaveAttribute('content', 'all');
  });

  it('template file called', async () => {
    // Arrange
    const IndexTemplateMock = toMock(IndexTemplate);
    const COMPONENT_PROPS = {};

    // Act
    setup();

    // Assert
    expect(IndexTemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
  });
});
