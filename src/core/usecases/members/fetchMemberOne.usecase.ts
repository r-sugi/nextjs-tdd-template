import { findMemberOne } from "@/core/repositories/members/members.repository";

export const fetchMemberOne = async () => {
  const res = await findMemberOne({ status: "Active" });
  if (res == null) {
    // TODO: error処理
    throw new Error("data not found");
  }
  return res;
};
