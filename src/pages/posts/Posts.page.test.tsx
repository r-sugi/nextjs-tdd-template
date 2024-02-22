import { render } from "@testing-library/react";
import Page from "./Posts.page";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import { mocast } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";

jest.mock("@/components/templates/Posts/Posts");

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
    // Act
    setup();

    // Assert
    assertSeoTags({
      titleText: publicPages.posts.title(),
      descriptionText: publicPages.posts.description(),
      ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.posts.path()}`,
    });
    const metaRobots = document.querySelector('meta[name="robots"]');
    expect(metaRobots).toBeInTheDocument();
    expect(metaRobots).toHaveAttribute("content", "all");
  });

  it("template file called", async () => {
    // Arrange
    const TemplateMock = mocast(PostsTemplate);
    mockNextHead();
    const COMPONENT_PROPS = {};

    // Act
    setup();

    // Assert
    expect(TemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
  });
});
