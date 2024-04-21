import { ActiveMember } from "@/core/domains/member/activeMember";
import { ResignMember } from "@/core/domains/member/resignMember";
import { MemberStatus, memberStatus } from "@/core/domains/member/status";
import { BannedMember } from "@/core/domains/member/bannedMember";
import { RestoredMember } from "@/core/domains/member/restoredMember";
import { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import {
  GetMembersByStatusQueryResult,
  MemberStatusActivityLatest,
} from "@/generated/graphql";

type MemberTypes = keyof Pick<
  MemberStatusActivityLatest,
  | "memberActive"
  | "memberBanned"
  | "memberResigned"
  | "memberPendingActivation"
  | "memberRestored"
>;

type StrictMemberStatusActivityLatest<K extends MemberTypes> =
  MemberStatusActivityLatest &
    Record<K, NonNullable<MemberStatusActivityLatest[K]>>;

type MemberStatusToMemberMap = {
  [memberStatus.active]: Array<ActiveMember>;
  [memberStatus.banned]: Array<BannedMember>;
  [memberStatus.pendingActivation]: Array<PendingActivationMember>;
  [memberStatus.resigned]: Array<ResignMember>;
  [memberStatus.restored]: Array<RestoredMember>;
};

export const transform = <K extends MemberStatus>(
  res: GetMembersByStatusQueryResult,
  status: K
): MemberStatusToMemberMap[K] => {
  if (res.data == null) {
    return [];
  }
  if (res.data.memberStatusActivityLatest.length === 0) {
    return [];
  }
  if (res.data.memberStatusActivityLatest == null) {
    return [];
  }

  if (status === "active") {
    return res.data.memberStatusActivityLatest
      .filter(
        (
          activity
        ): activity is StrictMemberStatusActivityLatest<"memberActive"> =>
          !!activity?.memberActive
      )
      .map((activity) => ({
        ...activity.memberActive,
        status: "active",
        createdAt: new Date(activity.memberActive.createdAt),
        birthday: new Date(activity.memberActive.birthday),
      })) as MemberStatusToMemberMap[K];
  } else if (status === "resigned") {
    return res.data.memberStatusActivityLatest
      .filter(
        (
          activity
        ): activity is StrictMemberStatusActivityLatest<"memberResigned"> =>
          !!activity?.memberResigned
      )
      .map((activity) => ({
        ...activity.memberResigned,
        status: "resigned",
        createdAt: new Date(activity.memberResigned.createdAt),
      })) as any; // FIXME: 型エラーを解消する
  } else if (status === "restored") {
    return res.data.memberStatusActivityLatest
      .filter(
        (
          activity
        ): activity is StrictMemberStatusActivityLatest<"memberRestored"> =>
          !!activity?.memberRestored
      )
      .map((activity) => ({
        ...activity.memberRestored,
        status: "restored",
        createdAt: new Date(activity.memberRestored.createdAt),
      })) as MemberStatusToMemberMap[K];
  } else if (status === "banned") {
    return res.data.memberStatusActivityLatest
      .filter(
        (
          activity
        ): activity is StrictMemberStatusActivityLatest<"memberBanned"> =>
          !!activity?.memberBanned
      )
      .map((activity) => ({
        ...activity.memberBanned,
        status: "banned",
        createdAt: new Date(activity.memberBanned.createdAt),
      })) as MemberStatusToMemberMap[K];
  } else if (status === "pendingActivation") {
    return res.data.memberStatusActivityLatest
      .filter(
        (
          activity
        ): activity is StrictMemberStatusActivityLatest<"memberPendingActivation"> =>
          !!activity?.memberPendingActivation
      )
      .map((activity) => ({
        ...activity.memberPendingActivation,
        status: "pendingActivation",
        createdAt: new Date(activity.memberPendingActivation.createdAt),
      })) as MemberStatusToMemberMap[K];
  } else {
    throw new Error("status is invalid");
  }
};
