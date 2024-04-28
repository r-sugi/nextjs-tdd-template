import { generateSeo } from "@/app/_seo/Seo";
import { loginRequiredPages } from "@/const/paths";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return generateSeo({
    title: loginRequiredPages.mypageResignMemberInput.title(),
    description: loginRequiredPages.mypageResignMemberInput.description(),
    path: loginRequiredPages.mypageResignMemberInput.path(),
  });
}

// error if export default function does not exists
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
