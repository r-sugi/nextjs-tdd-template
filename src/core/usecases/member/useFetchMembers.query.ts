import { MemberStatus } from "@/core/domains/member/status";
import { fetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useEffect, useState, useRef } from "react";

type Props = {
  status: MemberStatus;
};
type Option = {
  onError?: () => Promise<void>;
};

export const useFetchMembers = (props: Props, opt?: Option) => {
  const [members, setMembers] = useState<any[]>([]);

  const ref = useRef(opt?.onError);
  useEffect(() => {
    ref.current = opt?.onError;
  }, [opt?.onError]);

  useEffect(() => {
    (async () => {
      // TODO: hooksなのでapolloClientのhooksを使いたい、、、。
      const res = await fetchMembersByStatus({ status: props.status });
      if (res == null) {
        await ref.current?.();
        return;
      }
      setMembers(res);
    })();
  }, [ref]);

  return {
    members,
    setMembers,
  };
};
