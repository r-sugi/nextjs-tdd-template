import { Metadata } from "next";

import { loginRequiredPages } from "@/const/paths";

import { generateSeo } from "../_seo/Seo";

export function generateMetadata(): Metadata {
  return generateSeo({
    title: loginRequiredPages.mypage.title(),
    description: loginRequiredPages.mypage.description(),
    path: loginRequiredPages.mypage.path(),
  });
}

// error if export default function does not exists
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
