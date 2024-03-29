import { ErrorBoundary } from "@/pages/_error.boundary";
import {
  ApolloClient,
  from,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { FC, ReactNode, useMemo } from "react";

const AppApolloProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const link = useMemo(() => {
    return from([
      new HttpLink({
        uri:
          process.env.NEXT_PUBLIC_GRAPHQL_URI ??
          "http://localhost:8080/v1/graphql",
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
      <ErrorBoundary>{children}</ErrorBoundary>;
    </AppApolloProvider>
  );
};
