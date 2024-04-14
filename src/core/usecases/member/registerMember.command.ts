import { ActiveMember } from "@/core/domains/member/activeMember";

// ユースケースで使用したいvalueオブジェクト
export type registerMember = Omit<
  ActiveMember,
  "created_at" | "status_activity_id"
>;
