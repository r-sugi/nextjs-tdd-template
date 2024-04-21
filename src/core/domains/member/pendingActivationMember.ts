import { memberStatus } from "./status";

export type PendingActivationMember = {
  status: (typeof memberStatus)["pendingActivation"];
  statusActivityId: string;
  memberId: string;
  email: string;
  createdAt: Date;
};
