import { ActiveMember } from "./activeMember";
import { BannedMember } from "./bannedMember";
import { PendingActivationMember } from "./pendingActivationMember";
import { ResignMember } from "./resignMember";
import { RestoredMember } from "./restoredMember";

// ステータスごとにユニオンで増えていく
export type Member =
  | ActiveMember
  | ResignMember
  | BannedMember
  | RestoredMember
  | PendingActivationMember;

export type MembersByType = Array<ActiveMember> | Array<ResignMember> | Array<BannedMember> | Array<RestoredMember> | Array<PendingActivationMember>;
