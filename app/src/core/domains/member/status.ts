export const memberStatus = {
	pendingActivation: "pendingActivation",
	active: "active",
	resigned: "resigned",
	banned: "banned",
	restored: "restored",
} as const;

export type MemberStatus = (typeof memberStatus)[keyof typeof memberStatus];
