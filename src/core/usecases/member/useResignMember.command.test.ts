import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import {
	type UpdateMemberStatusInputType,
	useUpdateMemberStatus,
} from "@/core/repositories/member/members.repository";

import { outputErrorLog } from "@/error/outputErrorLog";
import { useNotification } from "../../../error/hooks/useNotification";
import { useResignMember } from "./useResignMember.command";

jest.mock("@/core/repositories/member/members.repository");
jest.mock("@/error/hooks/useNotification");
jest.mock("@/error/outputErrorLog");

describe(useResignMember, () => {
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
			const props = {
				reasonType: "",
				reasonDetail: null,
				agreement: true,
			};
			const mockResponse = {
				data: {} as UpdateMemberStatusInputType["activityInput"],
				error: null,
			};
			const expected = {
				data: {} as UpdateMemberStatusInputType["activityInput"],
			};
			toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
				return async () => mockResponse;
			});

			const { result } = renderHook(() => useResignMember());

			await waitFor(async () => {
				expect(await result.current(props)).toEqual(expected);
			});
			expect(mockSetError).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});
	describe("when error", () => {
		it("return null data, notify error", async () => {
			const ERROR = {
				message: "repository error",
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} as any;
			const props = {
				reasonType: "",
				reasonDetail: null,
				agreement: true,
			};
			const mockResponse = { data: null, error: ERROR };
			const expected = { data: null };
			toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
				return async () => mockResponse;
			});

			const { result } = renderHook(() => useResignMember());

			await waitFor(async () => {
				expect(await result.current(props)).toEqual(expected);
			});
			expect(mockSetError).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
