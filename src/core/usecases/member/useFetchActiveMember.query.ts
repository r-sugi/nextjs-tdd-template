import { ActiveMember } from "@/core/domains/member/activeMember";
import { findActiveMemberOne } from "@/core/repositories/member/members.repository";
import { useEffect, useState, useRef } from "react";

type Option = {
  onError?: () => Promise<void>;
};

export const useFetchActiveMember = (opt?: Option) => {
  const [activeMember, setActiveMember] = useState<ActiveMember>();

  const ref = useRef(opt?.onError);
  useEffect(() => {
    ref.current = opt?.onError;
  }, [opt?.onError]);

  useEffect(() => {
    (async () => {
      // TODO: hooksなのでapolloClientのhooksを使いたい、、、。
      const res = await findActiveMemberOne({
        memberId: "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1", // TODO: 動的な値(JWTから取得したもの)
      });
      if (res == null) {
        await ref.current?.();
        return;
      }
      setActiveMember(res);
    })();
  }, [ref]);

  return {
    activeMember,
    setActiveMember,
  };
};
