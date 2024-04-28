import { generateSeo } from "@/app/_seo/Seo";
import { loginRequiredPages } from "@/const/paths";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return generateSeo({
    title: loginRequiredPages.mypageResignMemberConfirm.title(),
    description: loginRequiredPages.mypageResignMemberConfirm.description(),
    path: loginRequiredPages.mypageResignMemberConfirm.path(),
  });
}

// error if export default function does not exists
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
