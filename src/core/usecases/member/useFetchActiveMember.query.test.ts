import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { activeMember } from "mocks/fixtures/activeMember";

jest.mock("@/core/repositories/member/members.repository");

describe("useFetchActiveMember", () => {
	it("success", async () => {
		toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
			return async () => ({ data: activeMember, errors: null });
		});

		const { result } = renderHook(() => useFetchActiveMember());

		await waitFor(() => {
			expect(result.current).toEqual({
				data: activeMember,
				errors: null,
				loading: false,
			});
		});
	});

	it("error", async () => {
		toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
			return async () => ({ data: null, errors: [] });
		});

		const { result } = renderHook(() => useFetchActiveMember());

		await waitFor(() => {
			expect(result.current).toEqual({
				data: null,
				errors: [],
				loading: false,
			});
		});
	});

	it("loading", async () => {
		toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
			return async () => ({ data: null, errors: null });
		});

		const { result } = renderHook(() => useFetchActiveMember());

		await waitFor(() => {
			expect(result.current).toEqual({
				data: null,
				errors: null,
				loading: true,
			});
		});
	});
});
