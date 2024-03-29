import { render, waitFor } from "@testing-library/react";
import { mocast } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";
import * as getPosts from "@/../__fixtures__/posts/getPosts";
import PostsTemplate from "@/components/templates/Posts/Posts";
import { publicPages } from "@/paths";
import { AppProvider } from "../_app.provider";
import Page from "./index.page";

jest.mock("@/components/templates/Posts/Posts");

describe(Page, () => {
  function setup() {
    return {
      view: render(
        <AppProvider>
          <Page />
        </AppProvider>
      ),
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
    const COMPONENT_PROPS = {
      posts: getPosts.success.data,
    };

    // Act
    setup();

    // Assert
    await waitFor(() => {
      assertSeoTags({
        titleText: publicPages.posts.title(),
        descriptionText: publicPages.posts.description(),
        ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.posts.path()}`,
      });
      const metaRobots = document.querySelector('meta[name="robots"]');
      expect(metaRobots).toBeInTheDocument();
      expect(metaRobots).toHaveAttribute("content", "all");
    });
  });

  it("template file called", async () => {
    // Arrange
    const COMPONENT_PROPS = {
      posts: getPosts.success.data,
    };
    mockNextHead();
    const TemplateMock = mocast(PostsTemplate);
    const CHILD_COMPONENT_PROPS = {
      posts: getPosts.success.data,
    };

    // Act
    setup();

    // Assert
    await waitFor(() => {
      expect(TemplateMock).toHaveBeenCalledWith(CHILD_COMPONENT_PROPS, {});
    });
  });
});
