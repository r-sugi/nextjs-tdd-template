import { render } from '@testing-library/react';

import { mockNextHead } from '@/__testing__/seo-helper';

import { SeoPops, Seo } from './seo';

function setup(props: SeoPops) {
  return {
    view: render(<Seo {...props} />),
  };
}

describe(Seo, () => {
  beforeEach(() => {
    mockNextHead();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('HeadタグにSEO系のhtmlタグが存在すること', async () => {
    const titleText = 'ダミータイトル';
    const descriptionText = 'ダミー説明文';
    const path = '/dummy';

    setup({
      title: titleText,
      description: descriptionText,
      path,
    });

    // title
    const titleTag = document.querySelector('title');
    expect(titleTag).toBeInTheDocument();
    expect(titleTag?.textContent).toBe(titleText);

    // description
    const metaDescription = document.querySelector("meta[name='description']");
    expect(metaDescription).toBeInTheDocument();
    expect(metaDescription?.attributes?.getNamedItem('content')?.value).toBe(descriptionText);

    /**
      og
    **/
    const ogUrl = document.querySelector("meta[property='og:url']");
    expect(ogUrl).toBeInTheDocument();
    expect(ogUrl?.attributes?.getNamedItem('content')?.value).toBe(
      `${process.env.NEXT_PUBLIC_HOST_URI}${path}`,
    );

    const ogType = document.querySelector("meta[property='og:type']");
    expect(ogType).toBeInTheDocument();
    expect(ogType?.attributes?.getNamedItem('content')?.value).toBe('website');

    const ogTitle = document.querySelector("meta[property='og:title']");
    expect(ogTitle).toBeInTheDocument();
    expect(ogTitle?.attributes?.getNamedItem('content')?.value).toBe(titleText);

    const ogDescription = document.querySelector("meta[property='og:description']");
    expect(ogDescription).toBeInTheDocument();
    expect(ogDescription?.attributes?.getNamedItem('content')?.value).toBe(descriptionText);

    const ogSiteName = document.querySelector("meta[property='og:site_name']");
    expect(ogSiteName).toBeInTheDocument();
    expect(ogSiteName?.attributes?.getNamedItem('content')?.value).toBe(titleText);

    const ogImage = document.querySelector("meta[property='og:image']");
    expect(ogImage).toBeInTheDocument();
    expect(ogImage?.attributes?.getNamedItem('content')?.value).toBe(
      `${process.env.NEXT_PUBLIC_HOST_URI}/this_is_og_image.png`,
    );

    const ogImageAlt = document.querySelector("meta[property='og:image:alt']");
    expect(ogImageAlt).toBeInTheDocument();
    expect(ogImageAlt?.attributes?.getNamedItem('content')?.value).toBe('this_is_og_image');

    const ogImageWidth = document.querySelector("meta[property='og:image:width']");
    expect(ogImageWidth).toBeInTheDocument();
    expect(ogImageWidth?.attributes?.getNamedItem('content')?.value).toBe(String(1200));

    const ogImageHeight = document.querySelector("meta[property='og:image:height']");
    expect(ogImageHeight).toBeInTheDocument();
    expect(ogImageHeight?.attributes?.getNamedItem('content')?.value).toBe(String(630));

    /**
      twitter
    **/
    const twitterCard = document.querySelector("meta[name='twitter:card']");
    expect(twitterCard).toBeInTheDocument();

    const twitterTitle = document.querySelector("meta[name='twitter:title']");
    expect(twitterTitle).toBeInTheDocument();
    expect(twitterTitle?.attributes?.getNamedItem('content')?.value).toBe(titleText);

    const twitterDescription = document.querySelector("meta[name='twitter:description']");
    expect(twitterDescription?.attributes?.getNamedItem('content')?.value).toBe(descriptionText);
    expect(twitterDescription).toBeInTheDocument();
  });

  describe('ブランクの場合、タグが存在しないこと', () => {
    it('descriptionがブランクの場合、descriptionタグが存在しないこと', async () => {
      const titleText = 'ダミータイトル';
      const descriptionText = '';
      const path = '/dummy';

      setup({
        title: titleText,
        description: descriptionText,
        path,
      });

      const metaDescription = document.querySelector("meta[name='description']");
      expect(metaDescription).not.toBeInTheDocument();
    });
  });
});
