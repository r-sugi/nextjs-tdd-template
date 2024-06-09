import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import type { MembersByType } from "@/core/domains/member/member";
import type { MemberStatus } from "@/core/domains/member/status";
import { useFetchMembersByStatus } from "@/core/repositories/member/members.repository";
import { useFetchMembers } from "@/core/usecases/member/useFetchMembers.query";
import { activeMember } from "mocks/fixtures/activeMember";
import type { Dispatch, SetStateAction } from "react";

jest.mock("@/core/repositories/member/members.repository");

describe(useFetchMembers, () => {
	it("success", async () => {
		const mockMembers = [activeMember];
		toMock(useFetchMembersByStatus).mockImplementationOnce(() => {
			return async () => ({ data: mockMembers, errors: null });
		});

		const props = {};

		const { result } = renderHook(() => useFetchMembers(props));

		await waitFor(() => {
			expect(result.current.data.members).toBe(mockMembers);
			expect(result.current.data.queryMemberStatus).toBe("pendingActivation");
			expect(result.current.loading).toBe(false);
		});
	});

	it("error", async () => {
		toMock(useFetchMembersByStatus).mockImplementationOnce(() => {
			return async () => ({ data: null, errors: [] });
		});

		const props = {};
		const { result } = renderHook(() => useFetchMembers(props));

		await waitFor(() =>
			expect(result.current).toEqual({
				data: {
					members: [],
					queryMemberStatus: "pendingActivation",
				},
				errors: [],
				loading: false,
				refetch: jest.fn(),
			}),
		);
	});
});
