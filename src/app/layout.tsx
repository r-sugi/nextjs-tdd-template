import { Metadata } from "next";
import Head from "next/head";
import { AppProvider } from "./_provider/app.provider";
import { HeaderTemplate } from "@/feature/header";
import { publicPages } from "@/const/paths";
import { generateSeo } from "./_seo/Seo";

export function generateMetadata(): Metadata {
  return generateSeo({
    title: publicPages.index.title(),
    description: publicPages.index.description(),
    path: publicPages.index.path(),
  });
}

// TODO: app routerにmswを対応させる
// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//   require("../../mocks");
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          charSet="utf-8"
        />
      </Head>
      <AppProvider>
        <body>
          {/* 検証用のheader */}
          <HeaderTemplate />
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
