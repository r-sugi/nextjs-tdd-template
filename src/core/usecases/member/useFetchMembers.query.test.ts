import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useFetchMembers } from "@/core/usecases/member/useFetchMembers.query";
import { outputErrorLog } from "@/error/outputErrorLog";
import { activeMember } from "mocks/fixtures/activeMember";
import { useNotification } from "../../../error/hooks/useNotification";

jest.mock("@/core/repositories/member/members.repository");
jest.mock("@/error/hooks/useNotification");
jest.mock("@/error/outputErrorLog");

describe(useFetchMembers, () => {
	const mockSetError = jest.fn();
	toMock(useNotification).mockImplementation(() => {
		return {
			notify: mockSetError,
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
			expect(mockSetError).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("return empty array, notify error", async () => {
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
						members: [],
						queryMemberStatus: "pendingActivation",
					},
					loading: false,
					refetch: expect.any(Function),
				}),
			);
			expect(mockSetError).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
