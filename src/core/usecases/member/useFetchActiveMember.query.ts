import { ActiveMember } from "@/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { useEffect, useState, useRef } from "react";

type Option = {
  onError?: () => Promise<void>;
};

export const useFetchActiveMember = (opt?: Option) => {
  const [activeMember, setActiveMember] = useState<ActiveMember | null>(null);
  const query = useFindActiveMemberOne();

  // チラつき防止
  const ref = useRef(opt?.onError);
  useEffect(() => {
    ref.current = opt?.onError;
  }, [opt?.onError]);

  useEffect(() => {
    (async () => {
      const state = await query(
        "ff4b01ee-15e9-4e2e-acb3-25a0347af7c1" // TODO: 動的な値(JWTから取得したもの)
      );

      if (state == null) {
        // エラー処理を実行する
        await ref.current?.();
        return;
      }
      setActiveMember(state);
    })();
  }, [ref]);

  return {
    activeMember,
  };
};
