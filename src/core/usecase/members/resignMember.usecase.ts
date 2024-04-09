import MemberRepository from "@/core/repository/members/members.repository";

// TODO: useXXXにしたらuseStateとか使えるようになる。hooksにした方が良い？
// TODO: 引数で渡す
export const resignMember = async () => {
  const res = await new MemberRepository().resignMember({
    activity_input: {
      status: "Resigned",
      member_id: 1,
      member_resigns: {
        data: [
          {
            member_id: 1,
            reason: "利用しないため",
          },
        ],
      },
    },
  });
  if (!res) {
    // TODO: error処理
    throw new Error("failed to resign");
  }
  return res;
};
