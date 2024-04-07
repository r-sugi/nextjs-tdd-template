import MemberRepository from "@/core/repositories/members/members.repository";

export const fetchMemberOne = async () => {
  const res = await new MemberRepository().findMemberOne({ status: "Active" });
  if (res == null) {
    // TODO: error処理
    throw new Error("data not found");
  }
  return res;
};
