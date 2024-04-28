"use client";
import {
  adminSecretPages,
  loginRequiredPages,
  publicPages,
} from "@/const/paths";
import Link from "next/link";
import { FC } from "react";

type Props = {};

export const HeaderTemplate: FC<Props> = () => {
  const pages = [
    publicPages.index,
    loginRequiredPages.mypage,
    loginRequiredPages.mypageResignMemberInput,
    loginRequiredPages.mypageResignMemberConfirm,
    adminSecretPages.members,
  ];

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li key={page.path()}>
            <Link href={page.path()}>{page.title()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
