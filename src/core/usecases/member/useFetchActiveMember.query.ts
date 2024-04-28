import { useEffect, useState, useRef } from "react";

import { ActiveMember } from "@/core/domains/member/activeMember";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";

type Option = {
  onError?: () => void;
};

type UsecaseLoading<T> = {
  data: null;
  loading: true;
} & Record<string, unknown>;

type UsecaseLoaded<T> = {
  data: T;
  loading: false;
} & Record<string, unknown>;

type Usecase<T> = UsecaseLoading<T> | UsecaseLoaded<T>;

export const useFetchActiveMember = (opt?: Option): Usecase<ActiveMember> => {
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
        ref.current?.();
        return;
      }
      setActiveMember(state);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return {
    data: activeMember,
    loading: activeMember === null,
  } as Usecase<ActiveMember>;
};
