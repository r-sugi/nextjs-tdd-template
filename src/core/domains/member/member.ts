import { memberStatus } from "./status";
import { ActiveMember } from "./activeMember";

// TODO: ファイルに切り出す
type ResignMember = {
  status: (typeof memberStatus)["resigned"];
  statusActivityId: number;
  reason_type: string;
  reason: string;
  reason_detail: string;
  createdAt: Date;
};

// ステータスごとにユニオンで増えていく
export type Member = ActiveMember | ResignMember;

// const hoge = () => {
//   const res = fetchActiveMember() as Member;

//   if (res.status === "active") {
//     // ResignMemberのみになる
//   } else if (res.status === "resigned") {
//   }
// };
