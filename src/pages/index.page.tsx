import { publicPages } from "@/paths";
import { IndexTemplate } from "@/components/templates/Index";
import { Seo } from "@/components/Seo";
import { FC } from "react";

type Props = {};
// TODO: import useSWR from 'swr'を使う
// TODO: ErrorBoundary
export const Index: FC<Props> = () => {
  return (
    <>
      <Seo
        title={publicPages.index.title()}
        description={publicPages.index.description()}
        path={publicPages.index.path()}
      />
      <IndexTemplate />
    </>
  );
};

export default Index;
