import { useRouter } from 'next/router';
import { FC } from 'react';

import { useFetchActiveMember } from '@/core/usecases/member/useFetchActiveMember.query';

import { PostIdErrorBoundary } from './components/PostIdErrorBoundary';

export const IndexTemplate: FC = () => {
  const router = useRouter();
  const { data: activeMember, loading } = useFetchActiveMember({
    onError: () => {
      // router.push('/');
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return <div>ActiveMember: {JSON.stringify(activeMember, null, 2)}</div>;
};

export const PostIdTemplate: FC = () => {
  return (
    <PostIdErrorBoundary>
      <IndexTemplate />
    </PostIdErrorBoundary>
  );
};
