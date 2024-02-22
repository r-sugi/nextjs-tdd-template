import { render, waitFor } from "@testing-library/react";
import Page from "./Posts.page";
import { AppProvider } from "../../pages/_app.page";
import { publicPages } from "@/paths";
import { PostsTemplate } from "@/components/templates/Posts/Posts";
import { mocast } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";
import { server } from "@/../mocks/server";
import { rest } from "msw";

jest.mock("@/components/templates/Posts/Posts");

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

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
    const mock = jest.fn();
    server.use(
      rest.get("/posts", (req, res, ctx) => {
        mock(req.params);
        return res(ctx.json({ data: [{ id: 1 }] }));
      })
    );

    // Act
    setup();

    // Assert
    await waitFor(() => {
      expect(mock).toHaveBeenCalledWith({});
    });
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
    const mock = jest.fn();
    server.use(
      rest.get("/posts", (req, res, ctx) => {
        mock(req.params);
        return res(ctx.json({ data: [{ id: 1 }] }));
      })
    );
    const TemplateMock = mocast(PostsTemplate);
    mockNextHead();
    const COMPONENT_PROPS = {};

    // Act
    setup();

    // Assert
    await waitFor(() => {
      expect(mock).toHaveBeenCalledWith({});
      expect(TemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
    });
  });
});
