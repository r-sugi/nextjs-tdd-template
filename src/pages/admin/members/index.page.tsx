import { publicPages } from "@/const/paths";
import { IndexTemplate } from "@/feature/admin/members/index";
import { Seo } from "@/pages/_seo/Seo";
import { FC } from "react";

type Props = {};

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
