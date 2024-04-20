import { HttpResponse } from "@/lib/apiClient";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { ResignMember } from "@/core/domains/member/resignMember";
import { MemberStatus } from "@/core/domains/member/status";
import { FetchMembersByStatusSuccess } from "./members.repository";
import { Members } from "@/core/domains/member/member";
import { BannedMember } from "@/core/domains/member/bannedMember";

type Response = HttpResponse<FetchMembersByStatusSuccess>;

export const transform = (
  res: Response,
  status: MemberStatus
): ActiveMember[] | ResignMember[] | BannedMember[] => {
  if (status === "active") {
    if (res.data.data.memberStatusActivityLatest.length === 0) {
      return [];
    }
    if (res.data.data.memberStatusActivityLatest == null) {
      return [];
    }
    return res.data.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberActive)
      .map((activity) => ({
        ...activity.memberActive,
        status: "active",
        createdAt: new Date(activity?.memberActive?.createdAt ?? ""),
        birthday: new Date(activity?.memberActive?.birthday ?? ""),
      })) as ActiveMember[];
  } else if (status === "resigned") {
    if (res.data.data.memberStatusActivityLatest.length === 0) {
      return [];
    }
    if (res.data.data.memberStatusActivityLatest == null) {
      return [];
    }
    return res.data.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberResigned)
      .map((activity) => ({
        ...activity.memberResigned,
        status: "resigned",
        // TODO:
        createdAt: new Date(activity?.memberResigned?.createdAt ?? ""),
      })) as ResignMember[];
  } else if (status === "restored") {
    // TODO:
    return [];
  } else if (status === "banned") {
    if (res.data.data.memberStatusActivityLatest.length === 0) {
      return [];
    }
    if (res.data.data.memberStatusActivityLatest == null) {
      return [];
    }
    return res.data.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberBanned)
      .map((activity) => ({
        ...activity.memberBanned,
        status: "banned",
        createdAt: new Date(activity?.memberBanned?.createdAt ?? ""),
      })) as BannedMember[];
  } else if (status === "pendingActivation") {
    return [];
  } else {
    throw new Error("status is invalid");
  }
};
