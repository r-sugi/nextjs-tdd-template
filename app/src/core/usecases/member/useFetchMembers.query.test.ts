import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useFetchMembers } from "@/core/usecases/member/useFetchMembers.query";
import { outputErrorLog } from "@/error/outputErrorLog";
import { useErrorNotificationContext } from "@/feature/error/banner/ErrorNotificationContext";
import { activeMember } from "@/mocks/fixtures/activeMember";

jest.mock("@/core/repositories/member/members.repository");
jest.mock("@/feature/error/banner/ErrorNotificationContext");
jest.mock("@/error/outputErrorLog");

describe(useFetchMembers, () => {
	const mockNotify = jest.fn();
	toMock(useErrorNotificationContext).mockImplementation(() => {
		return {
			notify: mockNotify,
			items: [],
			clear: () => {},
		};
	});
	const mockOutputErrorLog = jest.fn();
	toMock(outputErrorLog).mockImplementation(mockOutputErrorLog);

	describe("when success", () => {
		it("return data", async () => {
			const mockMembers = [activeMember];
			toMock(useFetchMembersByStatus).mockImplementationOnce(() => {
				return async () => ({ data: mockMembers, error: null });
			});

			const props = {};
			const { result } = renderHook(() => useFetchMembers(props));

			await waitFor(() => {
				expect(result.current).toEqual({
					data: {
						members: mockMembers,
						queryMemberStatus: "pendingActivation",
					},
					loading: false,
					refetch: expect.any(Function),
				});
			});
			expect(mockNotify).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("return null, notify error", async () => {
			const ERROR = {
				message: "repository error",
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} as any;
			toMock(useFetchMembersByStatus).mockImplementationOnce(() => {
				return async () => ({ data: null, error: ERROR });
			});

			const props = {};
			const { result } = renderHook(() => useFetchMembers(props));

			await waitFor(() =>
				expect(result.current).toEqual({
					data: {
						members: null,
						queryMemberStatus: "pendingActivation",
					},
					loading: false,
					refetch: expect.any(Function),
				}),
			);
			expect(mockNotify).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
