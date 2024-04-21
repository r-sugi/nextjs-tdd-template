import { MembersByType } from "@/core/domains/member/member";
import { MemberStatus, memberStatus } from "@/core/domains/member/status";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useEffect, useState, useRef } from "react";

type Props = {
  status?: MemberStatus;
};
type Option = {
  onError?: () => Promise<void>;
};

export const useFetchMembers = (props?: Props, opt?: Option) => {
  const [userStatus, setUserStatus] = useState<MemberStatus>(
    props?.status ?? memberStatus.pendingActivation
  );
  const [members, setMembers] = useState<MembersByType>([]);

  const query = useFetchMembersByStatus();

  // チラつき防止
  const ref = useRef(opt?.onError);
  useEffect(() => {
    ref.current = opt?.onError;
  }, [opt?.onError]);

  useEffect(() => {
    (async () => {
      const res = await query(userStatus);
      if (res == null) {
        await ref.current?.();
        return;
      }
      setMembers(res);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, userStatus]);

  return {
    members,
    setUserStatus,
    userStatus,
  };
};
