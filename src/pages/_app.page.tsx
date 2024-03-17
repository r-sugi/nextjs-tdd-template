import { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";
import { HogeErrorBoundary } from "@/components/error/custom/PostIdErrorBoundary";

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <ErrorBoundary>
      {/* error/custom/HogeErrorBoundary.tsx */}
      {/* fatal, critcalはこのファイルで描画される */}
      {/* <PostIdErrorBoundary> */}
      {/* はじめにcatchするBoundary層。チュートリアルにあるやつ */}
      {/* <ErrorBoundary> */}
      <div>{children}</div>
      {/* </ErrorBoundary> */}
      {/* </PostIdErrorBoundary> */}
    </ErrorBoundary>
  );
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
