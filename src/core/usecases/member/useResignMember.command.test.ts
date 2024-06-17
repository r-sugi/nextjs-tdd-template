import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import {
	type UpdateMemberStatusInputType,
	useUpdateMemberStatus,
} from "@/core/repositories/member/members.repository";

import { useResignMember } from "./useResignMember.command";

jest.mock("@/core/repositories/member/members.repository");

describe(useResignMember, () => {
	it("success", async () => {
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

	it("error", async () => {
		const props = {
			reasonType: "",
			reasonDetail: null,
			agreement: true,
		};
		const mockResponse = { data: null, error: null };
		const expected = { data: null, error: null };

		toMock(useUpdateMemberStatus).mockImplementationOnce(() => {
			return async () => mockResponse;
		});

		const { result } = renderHook(() => useResignMember());

		await waitFor(async () => {
			expect(await result.current(props)).toEqual(expected);
		});
	});
});
