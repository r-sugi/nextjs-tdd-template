import { renderHook, waitFor } from "@testing-library/react";

import { toMock } from "@/__testing__/helper";
import { useFindActiveMemberOne } from "@/core/repositories/member/members.repository";
import { useFetchActiveMember } from "@/core/usecases/member/useFetchActiveMember.query";
import { activeMember } from "mocks/fixtures/activeMember";

jest.mock("@/core/repositories/member/members.repository");

describe("useFetchActiveMember", () => {
	it("success", async () => {
		toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
			return async () => activeMember;
		});

		const { result } = renderHook(() => useFetchActiveMember());

		await waitFor(() => {
			expect(result.current.data).toBe(activeMember);
			expect(result.current.loading).toBe(false);
		});
	});

	it("onError called", async () => {
		toMock(useFindActiveMemberOne).mockImplementationOnce(() => {
			return async () => null;
		});

		const onErrorFn = jest.fn();

		const { result } = renderHook(() =>
			useFetchActiveMember({ onError: onErrorFn }),
		);

		await waitFor(() => {
			expect(result.current.data).toBe(null);
			expect(result.current.loading).toBe(true);
		});
		expect(onErrorFn).toHaveBeenCalledWith();
	});
});
