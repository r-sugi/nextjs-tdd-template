import { render } from "@testing-library/react";
import { mocast } from "@/__testing__/helper";
import { mockNextHead } from "@/__testing__/seo-helper";
import PageId from "./index.page";
import * as getPost from "@/../__fixtures__/posts/getPost";

jest.mock("@/components/templates/Posts/PostId/PostId");

describe(PageId, () => {
  function setup() {
    return {
      view: render(<PageId />),
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
    // Act
    setup();

    // Assert
    // assertSeoTags({
    //   titleText: publicPages.postId.title(postMock.title),
    //   descriptionText: publicPages.postId.description(),
    //   ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.postId.path(
    //     postMock.id
    //   )}`,
    // });
    const metaRobots = document.querySelector('meta[name="robots"]');
    expect(metaRobots).toBeInTheDocument();
    expect(metaRobots).toHaveAttribute("content", "all");
  });

  // it("template file called", async () => {
  //   // Arrange
  //   const TemplateMock = mocast(PostIdTemplate);
  //   mockNextHead();
  //   const postMock = getPost.success.data;
  //   const COMPONENT_PROPS = {
  //     post: postMock,
  //   };

  //   // Act
  //   setup();

  //   // Assert
  //   expect(TemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
  // });
});
