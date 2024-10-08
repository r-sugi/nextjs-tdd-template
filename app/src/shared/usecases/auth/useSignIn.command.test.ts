import { toMock } from "@/__testing__/helper";
import { outputErrorLog } from "@/error/outputErrorLog";
import { useErrorNotificationContext } from "@/feature/error/banner/ErrorNotificationContext";
import { signIn } from "@/shared/repositories/auth";
import { useSignIn } from "./useSignIn.command";

jest.mock("@/shared/repositories/auth");
jest.mock("@/feature/error/banner/ErrorNotificationContext");

jest.mock("@/error/outputErrorLog");

describe(useSignIn, () => {
	const mockNotify = jest.fn();
	toMock(useErrorNotificationContext).mockImplementation(() => {
		return {
			notify: mockNotify,
			items: [],
			clear: () => {},
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
			expect(mockNotify).not.toHaveBeenCalled();
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
			expect(mockNotify).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
