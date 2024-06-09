import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useUpdateMemberStatus } from "@/core/repositories/member/members.repository";

import { useResignMember } from "./useResignMember.command";

jest.mock("@/core/repositories/member/members.repository");

describe(useResignMember, () => {
	it("success", async () => {
		const props = {
			reasonType: "",
			reasonDetail: null,
			agreement: true,
		};
		const mockResponse = true;
		const expected = {
			data: true,
			error: null,
		};
		toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
			return async () => mockResponse;
		});

		const { result } = renderHook(() => useResignMember());

		await waitFor(async () => {
			expect(await result.current(props)).toEqual(expected);
		});
	});

	it("onError called", async () => {
		const props = {
			reasonType: "",
			reasonDetail: null,
			agreement: true,
		};
		const mockResponse = false;
		const expected = { data: false, error: null };

		toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
			return async () => mockResponse;
		});

		const { result } = renderHook(() => useResignMember());

		await waitFor(async () => {
			expect(await result.current(props)).toEqual(expected);
		});
	});
});
