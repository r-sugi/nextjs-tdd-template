import { toMock } from "@/__testing__/helper";
import { useNotification } from "@/error/hooks/useNotification";
import { outputErrorLog } from "@/error/outputErrorLog";
import { signUp } from "@/shared/repositories/auth";
import { useSignOut } from "./useSignOut.command";
import { useSignUp } from "./useSignUp.command";

jest.mock("@/shared/repositories/auth");
jest.mock("@/error/hooks/useNotification");
jest.mock("@/error/outputErrorLog");

describe(useSignUp, () => {
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
			toMock(signUp).mockResolvedValue({ data: true, error: null });

			await useSignUp(args);

			expect(mockSetError).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("error func called", async () => {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const ERROR = "ERROR" as any;

			toMock(signUp).mockResolvedValue({ data: null, error: ERROR });

			await useSignUp(args);

			expect(mockSetError).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
