// import { publicPages } from "@/paths";
import { IndexTemplate } from "@/components/templates/Index";
import { ResignMemberTemplate } from "@/components/templates/Mypage/ResignMember";
// import { Seo } from "@/components/Seo";
import { FC } from "react";

type Props = {};

export const Index: FC<Props> = () => {
  return (
    <>
      {/* <Seo
        title={publicPages.index.title()}
        description={publicPages.index.description()}
        path={publicPages.index.path()}
      /> */}
      <ResignMemberTemplate />
    </>
  );
};

export default Index;
