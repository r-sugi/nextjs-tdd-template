import { render } from "@testing-library/react";
import Page, { PagePropsType } from "./PostId.page";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { mocast } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";

import * as getPost from "@/../__fixtures__/posts/getPost";

jest.mock("@/components/templates/Posts/PostId/PostId");

describe(Page, () => {
  function setup({ props }: { props: PagePropsType }) {
    return {
      view: render(<Page {...props} />),
    };
  }

  beforeEach(() => {
    mockNextHead();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it("SEO tag rendered", async () => {
    // Arrange
    const postMock = getPost.success.data;
    const COMPONENT_PROPS = {
      post: postMock,
    };

    // Act
    setup({ props: COMPONENT_PROPS });

    // Assert
    assertSeoTags({
      titleText: publicPages.postId.title(postMock.title),
      descriptionText: publicPages.postId.description(),
      ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.postId.path(
        postMock.id
      )}`,
    });
    const metaRobots = document.querySelector('meta[name="robots"]');
    expect(metaRobots).toBeInTheDocument();
    expect(metaRobots).toHaveAttribute("content", "all");
  });

  it("template file called", async () => {
    // Arrange
    const TemplateMock = mocast(PostIdTemplate);
    mockNextHead();
    const postMock = getPost.success.data;
    const COMPONENT_PROPS = {
      post: postMock,
    };

    // Act
    setup({ props: COMPONENT_PROPS });

    // Assert
    expect(TemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
  });
});
