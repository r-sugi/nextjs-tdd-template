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
    // 初期描画時のrefに関数をセットする
    ref.current = opt?.onError;
  }, [opt?.onError]);

  useEffect(() => {
    (async () => {
      const res = await findActiveMemberOne({
        member_id: 1, // TODO: 動的な値(JWTから取得したもの)
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
