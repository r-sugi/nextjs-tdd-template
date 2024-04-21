import { HttpResponse } from "@/lib/apiClient";
import { ActiveMember } from "@/core/domains/member/activeMember";
import { ResignMember } from "@/core/domains/member/resignMember";
import { MemberStatus } from "@/core/domains/member/status";
import { FetchMembersByStatusSuccess } from "./members.repository";
import { BannedMember } from "@/core/domains/member/bannedMember";
import { RestoredMember } from "@/core/domains/member/restoredMember";
import { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import { GetMembersByStatusQueryResult } from "@/generated/graphql";

export const transform = (
  res: GetMembersByStatusQueryResult,
  status: MemberStatus
):
  | ActiveMember[]
  | ResignMember[]
  | BannedMember[]
  | RestoredMember[]
  | PendingActivationMember[] => {
  if (res.data == null) {
    return [];
  }
  if (res.data.memberStatusActivityLatest.length === 0) {
    return [];
  }
  if (res.data.memberStatusActivityLatest == null) {
    return [];
  }
  // TODO: 型問題を解消させたい(Member, Dateへの変換)
  // TODO: responseがMaybeになっているが、nullチェックをしているので、nullチェックを削除したい
  if (status === "active") {
    return res.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberActive)
      .map((activity) => ({
        ...activity.memberActive,
        status: "active",
        createdAt: new Date(activity?.memberActive?.createdAt ?? ""),
        birthday: new Date(activity?.memberActive?.birthday ?? ""),
      })) as ActiveMember[];
  } else if (status === "resigned") {
    return res.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberResigned)
      .map((activity) => ({
        ...activity.memberResigned,
        status: "resigned",
        createdAt: new Date(activity?.memberResigned?.createdAt ?? ""),
      })) as ResignMember[];
  } else if (status === "restored") {
    return res.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberRestored)
      .map((activity) => ({
        ...activity.memberRestored,
        status: "restored",
        createdAt: new Date(activity?.memberRestored?.createdAt ?? ""),
      })) as RestoredMember[];
  } else if (status === "banned") {
    return res.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberBanned)
      .map((activity) => ({
        ...activity.memberBanned,
        status: "banned",
        createdAt: new Date(activity?.memberBanned?.createdAt ?? ""),
      })) as BannedMember[];
  } else if (status === "pendingActivation") {
    return res.data.memberStatusActivityLatest
      .filter((activity) => !!activity?.memberPendingActivation)
      .map((activity) => ({
        ...activity.memberPendingActivation,
        status: "pendingActivation",
        createdAt: new Date(activity?.memberPendingActivation?.createdAt ?? ""),
      })) as PendingActivationMember[];
  } else {
    throw new Error("status is invalid");
  }
};
