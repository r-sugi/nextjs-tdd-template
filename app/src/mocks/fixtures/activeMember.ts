import type { ActiveMember } from "app/src/core/domains/member/activeMember";

export const activeMember = {
	status: "active",
	statusActivityId: "1",
	memberId: "xxx-eeee-ddddd",
	address: "Tokyo",
	postalCode: "100-0001",
	email: "hoge@example.com",
	birthday: new Date("1987-05-01"),
	createdAt: new Date("2024-05-01"),
} as const satisfies ActiveMember;
