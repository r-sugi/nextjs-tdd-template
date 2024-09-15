import { toMock } from "app/src/__testing__/helper";
import { outputErrorLog } from "app/src/error/outputErrorLog";
import { useMockErrorNotificationContext } from "app/src/feature/error/banner/__mock__/ErrorNotificationContext";
import { signUp } from "app/src/shared/repositories/auth";
import { useSignUp } from "./useSignUp.command";

jest.mock("@/shared/repositories/auth");
jest.mock("@/error/outputErrorLog");

describe(useSignUp, () => {
	const { notify: mockNotify } = useMockErrorNotificationContext();

	const mockOutputErrorLog = jest.fn();
	toMock(outputErrorLog).mockImplementation(mockOutputErrorLog);

	const args = {
		email: "",
		password: "",
	};

	describe("when success", () => {
		it("error func not called", async () => {
			toMock(signUp).mockResolvedValue({ data: true, error: null });

			const { signUpMutation } = useSignUp();
			await signUpMutation(args);

			expect(signUp).toHaveBeenCalledTimes(1);
			expect(mockNotify).not.toHaveBeenCalled();
			expect(mockOutputErrorLog).not.toHaveBeenCalled();
		});
	});

	describe("when error", () => {
		it("error func called", async () => {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const ERROR = "ERROR" as any;

			toMock(signUp).mockResolvedValue({ data: null, error: ERROR });

			const { signUpMutation } = useSignUp();
			await signUpMutation(args);

			expect(signUp).toHaveBeenCalled();
			expect(mockNotify).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
