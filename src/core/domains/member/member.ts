import { ActiveMember } from "./activeMember";
import { BannedMember } from "./bannedMember";
import { ResignMember } from "./resignMember";

// ステータスごとにユニオンで増えていく
export type Member = ActiveMember | ResignMember | BannedMember;
export type Members = Array<ActiveMember | ResignMember>;

// const hoge = () => {
//   const res = fetchActiveMember() as Member;

//   if (res.status === "active") {
//     // ResignMemberのみになる
//   } else if (res.status === "resigned") {
//   }
// };
