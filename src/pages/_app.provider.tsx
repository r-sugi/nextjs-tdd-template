import { ErrorBoundary } from "@/pages/_error.boundary";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC, ReactNode, useMemo } from "react";

const AppApolloProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const client = useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: "no-cache",
          },
        },
      }),
    []
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
      <ErrorBoundary>{children}</ErrorBoundary>;
    </AppApolloProvider>
  );
};
