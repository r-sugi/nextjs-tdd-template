import { render } from "@testing-library/react";
import Page from "./index.page";
import { publicPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/mypage/index/index";
import { toMock } from "@/__testing__/helper";
import { assertSeoTags, mockNextHead } from "@/__testing__/seo-helper";

jest.mock("@/components/templates/Index");

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
      titleText: publicPages.index.title(),
      descriptionText: publicPages.index.description(),
      ogUrlText: `${process.env.NEXT_HOST_URI}${publicPages.index.path()}`,
    });

    const metaRobots = document.querySelector('meta[name="robots"]');
    expect(metaRobots).toBeInTheDocument();
    expect(metaRobots).toHaveAttribute("content", "all");
  });

  it("template file called", async () => {
    // Arrange
    const IndexTemplateMock = toMock(IndexTemplate);
    const COMPONENT_PROPS = {};

    // Act
    setup();

    // Assert
    // @note: toHaveBeenCalledでも良いかもしれない
    expect(IndexTemplateMock).toHaveBeenCalledWith(COMPONENT_PROPS, {});
  });
});
