import MemberRepository from "@/core/repository/members/members.repository";
import { ActiveMemberDTO } from "./ActiveMemberDTO";
import { useEffect, useState } from "react";

export const useFetchActiveMember = () => {
  const [activeMember, setActiveMember] = useState<ActiveMemberDTO>();

  useEffect(() => {
    (async () => {
      const res = await new MemberRepository().findActiveMemberOne({
        member_id: 1,
      });
      if (res == null) {
        // TODO: error処理
        throw new Error("activeMember not found");
      }
      setActiveMember(new ActiveMemberDTO(res));
    })();
  }, []);

  return {
    activeMember,
    setActiveMember,
  };
};
