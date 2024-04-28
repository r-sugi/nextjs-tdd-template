"use client";
// import { ErrorBoundary } from "@/pages/_error.boundary";
import {
  ApolloClient,
  from,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { FC, ReactNode, useMemo } from "react";

import { NEXT_PUBLIC_GRAPHQL_URI } from "@/config/env";

const AppApolloProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const link = useMemo(() => {
    return from([
      new HttpLink({
        uri: NEXT_PUBLIC_GRAPHQL_URI,
      }),
    ]);
  }, []);

  const client = useMemo(
    () =>
      new ApolloClient({
        link,
        cache: new InMemoryCache(),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: "no-cache",
          },
        },
      }),
    [link]
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <AppApolloProvider>
      {/* TODO: <ErrorBoundary> */}
      {children}
      {/* </ErrorBoundary> */}
    </AppApolloProvider>
  );
};
