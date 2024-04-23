import { Metadata } from "next";
import Head from "next/head";
import { AppProvider } from "./(provider)/app.provider";
import { HeaderTemplate } from "@/feature/header";

// TODO: app routerにmswを対応させる
// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//   require("../../mocks");
// }

export const metadata: Metadata = {
  title: "default title",
  description: "default description",
};

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
