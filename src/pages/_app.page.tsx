import { ErrorBoundary } from "@/pages/_error.boundary";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks/index");
}

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
