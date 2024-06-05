import { renderHook, waitFor } from '@testing-library/react';

import { toMock } from '@/__testing__/helper';
import { useUpdateMemberStatus } from '@/core/repositories/member/members.repository';

import { useResignMember } from './useResignMember.command';

jest.mock('@/core/repositories/member/members.repository');

describe(useResignMember, () => {
  it('success', async () => {
    const props = {
      reasonType: '',
      reasonDetail: null,
      agreement: true,
    };
    const options = {};
    const mockResponse = true;
    toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
      return async () => mockResponse;
    });

    const { result } = renderHook(() => useResignMember());

    await waitFor(async () => {
      expect(await result.current(props, options)).toBe(mockResponse);
    });
  });

  it('onError called', async () => {
    const props = {
      reasonType: '',
      reasonDetail: null,
      agreement: true,
    };
    const onErrorFn = jest.fn();
    const options = {
      onError: onErrorFn,
    };
    const mockResponse = false;
    toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
      return async () => mockResponse;
    });

    const { result } = renderHook(() => useResignMember());

    await waitFor(async () => {
      expect(await result.current(props, options)).toBe(mockResponse);
    });
    expect(onErrorFn).toHaveBeenCalledWith();
  });
});
