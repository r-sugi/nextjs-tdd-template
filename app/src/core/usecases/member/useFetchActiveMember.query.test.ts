import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { outputErrorLog } from "@/error/outputErrorLog";
import { useErrorNotificationContext } from "@/feature/error/banner/ErrorNotificationContext";
import { activeMember } from "@/mocks/fixtures/activeMember";

jest.mock("@/core/repositories/member/members.repository");
jest.mock("@/feature/error/banner/ErrorNotificationContext");
jest.mock("@/error/outputErrorLog");

describe("useFetchActiveMember", () => {
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
			toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
				return async () => ({ data: activeMember, error: null });
			});

			const { result } = renderHook(() => useFetchActiveMember());

			await waitFor(() => {
				expect(result.current).toEqual({
					data: activeMember,
					loading: false,
				});
			});
			expect(mockNotify).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("return null data, notify error called", async () => {
			const ERROR = {
				message: "repository error",
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} as any;
			toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
				return async () => ({ data: null, error: ERROR });
			});

			const { result } = renderHook(() => useFetchActiveMember());
			await waitFor(() => {
				expect(result.current).toEqual({
					data: null,
					loading: false,
				});
			});
			expect(mockNotify).toHaveBeenCalledWith(ERROR);
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
