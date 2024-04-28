import { generateSeo } from "./Seo";

describe(generateSeo, () => {
  it("HeadタグにSEO系のhtmlタグが存在すること", async () => {
    const titleText = "ダミータイトル";
    const descriptionText = "ダミー説明文";
    const path = "/dummy";

    const result = generateSeo({
      title: titleText,
      description: descriptionText,
      path,
    });

    // site
    expect(result.title).toBe(titleText);
    expect(result.description).toBe(descriptionText);
    // robots
    expect(result?.robots?.index).toBe(true);
    expect(result?.robots?.follow).toBe(true);

    // twitter
    expect(result.twitter.card).toBe("summary");
    expect(result.twitter.title).toBe(titleText);
    expect(result.twitter.description).toBe(descriptionText);

    // og
    expect(result.openGraph.url).toBe(`${process.env.NEXT_HOST_URI}${path}`);
    expect(result.openGraph.title).toBe(titleText);
    expect(result.openGraph.description).toBe(descriptionText);
    expect(result.openGraph.siteName).toBe(titleText);
    expect(result.openGraph.images[0].url).toBe(
      `${process.env.NEXT_HOST_URI}/this_is_og_image.png`
    );
    expect(result.openGraph.images[0].alt).toBe("this_is_og_image");
    expect(result.openGraph.images[0].width).toBe(1200);
    expect(result.openGraph.images[0].height).toBe(630);
  });
});
