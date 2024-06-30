import { toMock } from "@/__testing__/helper";
import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { signOut } from "@/shared/repositories/auth";
import { useSignOut } from "./useSignOut.command";

jest.mock("@/shared/repositories/auth");
jest.mock("@/error/hooks/useNotification");
jest.mock("@/error/outputErrorLog");

describe(useSignOut, () => {
	const mockSetError = jest.fn();
	toMock(useNotification).mockImplementation(() => {
		return {
			notify: mockSetError,
		};
	});

	const mockOutputErrorLog = jest.fn();
	toMock(outputErrorLog).mockImplementation(mockOutputErrorLog);

	describe("when success", () => {
		it("error func not called", async () => {
			toMock(signOut).mockResolvedValue({ data: true, error: null });

			const { signOutMutation } = useSignOut();
			await signOutMutation();

			expect(signOut).toHaveBeenCalledTimes(1);
			expect(mockSetError).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("error func called", async () => {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const ERROR = "ERROR" as any;

			toMock(signOut).mockResolvedValue({ data: null, error: ERROR });

			const { signOutMutation } = useSignOut();
			await signOutMutation();

			expect(signOut).toHaveBeenCalled();
			expect(mockSetError).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
