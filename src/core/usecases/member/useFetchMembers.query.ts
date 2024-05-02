import { useEffect, useState, useRef, SetStateAction, Dispatch } from 'react';

import { MembersByType } from '@/core/domains/member/member';
import { MemberStatus, memberStatus } from '@/core/domains/member/status';
import { useFetchMembersByStatus } from '@/core/repositories/member/members.repository';

type Props = {
  status?: MemberStatus;
};
type Option = {
  onError?: () => void;
};
type UsecaseLoading<T> = {
  data: {
    members: null;
    queryMemberStatus: MemberStatus;
  };
  loading: true;
  refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type UsecaseLoaded<T> = {
  data: {
    members: T;
    queryMemberStatus: MemberStatus;
  };
  loading: false;
  refetch: Dispatch<SetStateAction<MemberStatus>>;
} & Record<string, unknown>;

type Usecase<T> = UsecaseLoading<T> | UsecaseLoaded<T>;

export const useFetchMembers = (props?: Props, opt?: Option): Usecase<MembersByType> => {
  const [queryMemberStatus, setQueryMemberStatus] = useState<MemberStatus>(
    props?.status ?? memberStatus.pendingActivation,
  );
  const [members, setMembers] = useState<MembersByType | null>(null);

  const query = useFetchMembersByStatus();

  // チラつき防止
  const ref = useRef(opt?.onError);
  useEffect(() => {
    ref.current = opt?.onError;
  }, [opt?.onError]);

  useEffect(() => {
    (async () => {
      const res = await query(queryMemberStatus);
      // FIXME: graphQLのエラーの値で分岐させる
      // if (res == null) {
      //   ref.current?.();
      //   return;
      // }
      setMembers(res);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, queryMemberStatus]);

  return {
    data: {
      members,
      queryMemberStatus,
    },
    loading: members === null,
    refetch: setQueryMemberStatus,
  } as Usecase<MembersByType>;
};
