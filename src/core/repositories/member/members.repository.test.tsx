import { renderHook, waitFor } from '@testing-library/react';
import { graphql } from 'msw';
import { setupServer } from 'msw/node';
import { ReactNode } from 'react';

import { MembersByType } from '@/core/domains/member/member';
import { memberStatus } from '@/core/domains/member/status';
import { UpdateMemberStatusInputType } from '@/core/usecases/member/useResignMember.command';
import {
  GetActiveMemberDocument,
  GetMembersByStatusDocument,
  ResignMemberDocument,
} from '@/generated/graphql';
import { AppApolloProvider } from '@/pages/_provider/_appApollo.provider';
import { activeMember } from 'mocks/fixtures/activeMember';
import { successMembersRespository } from 'mocks/fixtures/repository/members.repository';

import {
  useFetchMembersByStatus,
  useFindActiveMemberOne,
  useUpdateMemberStatus,
} from './members.repository';

const server = setupServer();

describe('repository', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  afterEach(() => {
    jest.resetAllMocks();
  });

  const wrapper = ({ children }: { children: ReactNode }) => {
    return <AppApolloProvider>{children}</AppApolloProvider>;
  };

  describe(useFindActiveMemberOne, () => {
    describe.each([
      ['array length is zero', [], null],
      ['array length is null', [null], null],
    ])('no data due to %s (response is %s, expected is %s)', (_, response, expected) => {
      it('return null by array length is zero', async () => {
        const memberId = '1';
        const mockFn = jest.fn();

        server.use(
          graphql.query(GetActiveMemberDocument, (req, res, ctx) => {
            mockFn(req.variables);
            return res(
              ctx.data({
                id: '',
                createdAt: '',
                memberStatusActivityLatest: response,
              }),
            );
          }),
        );

        const { result } = renderHook(() => useFindActiveMemberOne(), { wrapper });

        await waitFor(async () => {
          expect(await result.current(memberId)).toBe(expected);
        });
        expect(mockFn).toHaveBeenCalledWith({ memberId });
      });
    });
    describe('found data', () => {
      it('return data', async () => {
        const memberId = '1';
        const mockFn = jest.fn();

        server.use(
          graphql.query(GetActiveMemberDocument, (req, res, ctx) => {
            mockFn(req.variables);
            return res(
              ctx.data({
                memberStatusActivityLatest: [activeMember],
              }),
            );
          }),
        );

        const { result } = renderHook(() => useFindActiveMemberOne(), { wrapper });

        await waitFor(async () => {
          expect(await result.current(memberId)).toEqual(activeMember);
        });
        expect(mockFn).toHaveBeenCalledWith({ memberId });
      });
    });
  });

  describe(useFetchMembersByStatus, () => {
    describe.each([
      ['array length is zero', [], []],
      ['array length is null', null, []],
    ])(
      'no data due to %s (response is %s, expected is %s)',
      (_, response, expected: MembersByType) => {
        it('return null', async () => {
          const status = 'active';
          const mockFn = jest.fn();

          server.use(
            graphql.query(GetMembersByStatusDocument, (req, res, ctx) => {
              mockFn(req.variables);
              return res(
                ctx.data({
                  id: '',
                  createdAt: '',
                  memberStatusActivityLatest: response,
                }),
              );
            }),
          );

          const { result } = renderHook(() => useFetchMembersByStatus(), { wrapper });

          await waitFor(async () => {
            expect(await result.current(status)).toEqual(expected);
          });
          expect(mockFn).toHaveBeenCalledWith({ status });
        });
      },
    );
    describe('found data', () => {
      it('return array', async () => {
        const status = 'active';
        const mockFn = jest.fn();
        const memberActive = successMembersRespository.memberActive;

        const expected: MembersByType = [
          {
            ...memberActive,
            status: 'active',
            birthday: new Date(memberActive.birthday),
            createdAt: new Date(memberActive.createdAt),
          },
        ];

        server.use(
          graphql.query(GetMembersByStatusDocument, (req, res, ctx) => {
            mockFn(req.variables);
            return res(
              ctx.data({
                id: '',
                createdAt: '',
                memberStatusActivityLatest: [{ memberActive }],
              }),
            );
          }),
        );

        const { result } = renderHook(() => useFetchMembersByStatus(), { wrapper });

        await waitFor(async () => {
          expect(await result.current(status)).toEqual(expected);
        });
        expect(mockFn).toHaveBeenCalledWith({ status });
      });
    });
  });

  // FIXME: テストパスするがコンソールにエラーが出る
  describe.skip(useUpdateMemberStatus, () => {
    describe('success', () => {
      it('return array', async () => {
        const mockFn = jest.fn();
        const variables: UpdateMemberStatusInputType = {
          activityInput: {
            status: memberStatus.resigned,
            memberId: '1',
            memberResigned: {
              data: {
                memberId: '1',
                reasonType: 'OTHER',
                agreement: true,
                reasonDetail: 's',
              },
            },
          },
        };
        const expected = true;

        server.use(
          graphql.mutation(ResignMemberDocument, (req, res, ctx) => {
            mockFn(req.variables);
            return res(
              ctx.data({
                memberId: '',
                status: '',
                memberResigned: {
                  memberId: '',
                  reasonType: '',
                  agreement: true,
                  reasonDetail: '',
                },
              }),
            );
          }),
        );

        const { result } = renderHook(() => useUpdateMemberStatus(), { wrapper });

        await waitFor(async () => {
          expect(await result.current(variables)).toEqual(expected);
        });
        // expect(mockFn).toHaveBeenCalledWith(variables);
      });
    });
  });
});
