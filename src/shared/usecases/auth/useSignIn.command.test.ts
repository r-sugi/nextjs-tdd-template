import { toMock } from "@/__testing__/helper";
import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { signIn } from "@/shared/repositories/auth";
import { renderHook } from "@testing-library/react";
import { useSignIn } from "./useSignIn.command";

jest.mock("@/shared/repositories/auth");
jest.mock("@/error/hooks/useNotification");
jest.mock("@/error/outputErrorLog");

describe(useSignIn, () => {
	const mockSetError = jest.fn();
	toMock(useNotification).mockImplementation(() => {
		return {
			notify: mockSetError,
		};
	});

	const mockOutputErrorLog = jest.fn();
	toMock(outputErrorLog).mockImplementation(mockOutputErrorLog);

	const args = {
		email: "",
		password: "",
	};

	describe("when success", () => {
		it("error func not called", async () => {
			toMock(signIn).mockResolvedValue({ data: true, error: null });

			const { signInMutation } = useSignIn();
			await signInMutation(args);

			expect(signIn).toHaveBeenCalledTimes(1);
			expect(mockSetError).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("error func called", async () => {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const ERROR = "ERROR" as any;

			toMock(signIn).mockResolvedValue({ data: null, error: ERROR });

			const { signInMutation } = useSignIn();
			await signInMutation(args);

			expect(signIn).toHaveBeenCalled();
			expect(mockSetError).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
