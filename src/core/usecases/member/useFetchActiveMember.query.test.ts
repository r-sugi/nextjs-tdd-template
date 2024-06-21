import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { activeMember } from "mocks/fixtures/activeMember";
import { useNotifyAPIError } from "../../../hooks/error/useNotifyAPIError";

jest.mock("@/core/repositories/member/members.repository");
jest.mock("@/hooks/error/useNotifyAPIError");

describe("useFetchActiveMember", () => {
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

			const mockSetError = jest.fn();
			toMock(useNotifyAPIError).mockImplementationOnce(() => {
				return {
					setError: mockSetError,
				};
			});

			const { result } = renderHook(() => useFetchActiveMember());
			await waitFor(() => {
				expect(result.current).toEqual({
					data: null,
					loading: false,
				});
			});
			expect(mockSetError).toHaveBeenCalledWith(ERROR);
		});
	});
});
