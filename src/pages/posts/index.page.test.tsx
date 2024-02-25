import { render, waitFor } from "@testing-library/react";
import Page, { PagePropsType } from "./index.page";
import { AppProvider } from "../_app.page";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import { mocast } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";
import * as getPosts from "@/../__fixtures__/posts/getPosts";

jest.mock("@/components/templates/Posts/Posts");

describe(Page, () => {
  function setup({ props }: { props: PagePropsType }) {
    return {
      view: render(
        <AppProvider>
          <Page {...props} />
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
    setup({ props: COMPONENT_PROPS });

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
    setup({ props: COMPONENT_PROPS });

    // Assert
    await waitFor(() => {
      expect(TemplateMock).toHaveBeenCalledWith(CHILD_COMPONENT_PROPS, {});
    });
  });
});
