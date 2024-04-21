import { memberStatus } from "./status";

export type RestoredMember = {
  status: (typeof memberStatus)["restored"];
  statusActivityId: string;
  memberId: string;
  reason: string;
  operatedBy: string;
  createdAt: Date;
};
