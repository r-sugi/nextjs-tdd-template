import { renderHook, waitFor } from '@testing-library/react';

import { toMock } from '@/__testing__/helper';
import { MembersByType } from '@/core/domains/member/member';
import { useFetchMembersByStatus } from '@/core/repositories/member/members.repository';
import { useFetchMembers } from '@/core/usecases/member/useFetchMembers.query';
import { activeMember } from 'mocks/fixtures/activeMember';

jest.mock('../../repositories/member/members.repository');

describe(useFetchMembers, () => {
  it('success', async () => {
    const mockMembers = [activeMember];
    toMock(useFetchMembersByStatus).mockImplementationOnce(() => {
      return async () => mockMembers;
    });

    const props = {};

    const { result } = renderHook(() => useFetchMembers(props));

    await waitFor(() => {
      expect(result.current.data.members).toBe(mockMembers);
      expect(result.current.data.queryMemberStatus).toBe('pendingActivation');
      expect(result.current.loading).toBe(false);
    });
  });

  // FIXME: graphqlのエラーの値で分岐させる
  it.skip('onError called', async () => {
    const mockMembers = [] as MembersByType;
    toMock(useFetchMembersByStatus).mockImplementationOnce(() => {
      return async () => mockMembers;
    });

    const onErrorFn = jest.fn();

    const props = {};

    const { result } = renderHook(() => useFetchMembers(props, { onError: onErrorFn }));

    await waitFor(() => {
      expect(result.current.data.members).toBe(mockMembers);
      expect(result.current.data.queryMemberStatus).toBe('pendingActivation');
      expect(result.current.loading).toBe(true);
    });
    expect(onErrorFn).toHaveBeenCalledWith();
  });
});
