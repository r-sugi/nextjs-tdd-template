import { Metadata } from "next";

type SeoOptions = {
  robots?: {
    index: true;
    follow: true;
  };
};

export type SeoPops = {
  title: string;
  description: string;
  path: string;
  options?: SeoOptions;
};

export const generateSeo = ({ title, description, path, options }: SeoPops) => {
  const NEXT_HOST_URI = process.env.NEXT_HOST_URI;
  const defaultSeoOptions: SeoOptions = {
    robots: {
      index: true,
      follow: true,
    },
  };

  return {
    title,
    // keywords: "", SEO的に意味があるかは効果があるか不明なのでコメントアウト
    description: description,
    robots: options?.robots ?? defaultSeoOptions.robots,
    twitter: {
      card: "summary",
      title,
      description: description,
    },
    openGraph: {
      type: "website",
      url: `${NEXT_HOST_URI}${path}`,
      title,
      description,
      siteName: title,
      images: [
        {
          url: `${NEXT_HOST_URI}/this_is_og_image.png`,
          alt: "this_is_og_image",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};
