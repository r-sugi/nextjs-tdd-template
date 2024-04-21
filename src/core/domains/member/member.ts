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
export type Members = Array<ActiveMember | ResignMember>;
