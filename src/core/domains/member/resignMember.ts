import { memberStatus } from "./status";

export type ResignMember = {
  status: (typeof memberStatus)["resigned"];
  statusActivityId: string;
  reasonType: string;
  reasonDetail: string;
  agreement: boolean;
  createdAt: Date;
};
