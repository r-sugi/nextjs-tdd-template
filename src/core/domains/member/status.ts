export const memberStatus = {
  pendingMigration: "pendingMigration",
  active: "active",
  resigned: "resigned",
  banned: "resigned",
} as const;

export type MemberStatus = typeof memberStatus[keyof typeof memberStatus];
