"use client";
import { publicPages } from "@/const/paths";
// import { IndexTemplate } from "@/feature/mypage/index/index";
// import { Seo } from "@/pages/_seo/Seo";
import { Metadata } from "next/types";
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
      {/* <IndexTemplate /> */}
      トップページです！
    </>
  );
}
