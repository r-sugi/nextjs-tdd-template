import MemberRepository from "@/core/repository/members/members.repository";

export const fetchActiveMember = async () => {
  const res = await new MemberRepository().findActiveMemberOne({
    member_id: 1,
  });
  if (res == null) {
    // TODO: error処理
    throw new Error("data not found");
  }
  return res;
};
