"use client";
// import { publicPages } from "@/paths";
import { ResignMemberTemplate } from "@/feature/mypage/resignMember";
// import { Seo } from "@/components/Seo";
import { FC } from "react";

type Props = {};

export default function Index() {
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
}
