import { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <ErrorBoundary fallback={<p>エラーが発生しました</p>}>
      <div>{children}</div>
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
