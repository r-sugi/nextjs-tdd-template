import { render } from "@testing-library/react";
import Page from "./PostId.page";
import { publicPages } from "@/paths";
import { PostIdTemplate } from "@/components/templates/Posts/PostId/PostId";
import { mocast } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";

jest.mock("@/components/templates/Posts/PostId/PostId");

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

  it("SEO tag rendered", async () => {
    // Arrange
    const postId = `1`; // TODO:

    // Act
    setup();

    // Assert
    assertSeoTags({
      titleText: publicPages.postId.title(),
      descriptionText: publicPages.postId.description(),
      ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.postId.path(
        postId
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
    const COMPONENT_PROPS = {};

    // Act
    setup();

    // Assert
    expect(TemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
  });
});
