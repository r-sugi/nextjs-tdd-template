import { Metadata } from "next";

import { generateSeo } from "@/app/_seo/Seo";
import { adminSecretPages } from "@/const/paths";

export function generateMetadata(): Metadata {
  return generateSeo({
    title: adminSecretPages.members.title(),
    description: adminSecretPages.members.description(),
    path: adminSecretPages.members.path(),
  });
}

// error if export default function does not exists
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
