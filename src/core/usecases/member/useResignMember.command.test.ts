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
		const mockResponse = { data: true, errors: null };
		const expected = {
			data: true,
			errors: null,
		};
		toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
			return async () => mockResponse;
		});

		const { result } = renderHook(() => useResignMember());

		await waitFor(async () => {
			expect(await result.current(props)).toEqual(expected);
		});
	});

	it("error", async () => {
		const props = {
			reasonType: "",
			reasonDetail: null,
			agreement: true,
		};
		const mockResponse = { data: false, errors: [] };
		const expected = { data: false, errors: [] };

		toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
			return async () => mockResponse;
		});

		const { result } = renderHook(() => useResignMember());

		await waitFor(async () => {
			expect(await result.current(props)).toEqual(expected);
		});
	});
});
