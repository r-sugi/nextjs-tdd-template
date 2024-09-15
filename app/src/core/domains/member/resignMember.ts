import type { memberStatus } from "./status";

export type ResignMember = {
	status: (typeof memberStatus)["resigned"];
	statusActivityId: string;
	reasonType: string;
	reasonDetail?: string; // 任意入力項目なのでundefinedを許容する
	agreement: boolean;
	createdAt: Date;
};
