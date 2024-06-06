import type { memberStatus } from "./status";

export type BannedMember = {
	status: (typeof memberStatus)["banned"];
	statusActivityId: string;
	memberId: string;
	reason: string;
	operatedBy: string;
	createdAt: Date;
};
