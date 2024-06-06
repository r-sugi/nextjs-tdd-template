import type { ActiveMember } from "./activeMember";
import type { BannedMember } from "./bannedMember";
import type { PendingActivationMember } from "./pendingActivationMember";
import type { ResignMember } from "./resignMember";
import type { RestoredMember } from "./restoredMember";

// ステータスごとにユニオンで増えていく
// type Member =
//   | ActiveMember
//   | ResignMember
//   | BannedMember
//   | RestoredMember
//   | PendingActivationMember;

export type MembersByType =
	| Array<ActiveMember>
	| Array<ResignMember>
	| Array<BannedMember>
	| Array<RestoredMember>
	| Array<PendingActivationMember>;
