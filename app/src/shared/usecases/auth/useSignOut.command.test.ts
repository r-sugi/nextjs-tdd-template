import { toMock } from "@/__testing__/helper";
import { outputErrorLog } from "@/error/outputErrorLog";
import { useMockErrorNotificationContext } from "@/feature/error/banner/__mock__/ErrorNotificationContext";
import { signOut } from "@/shared/repositories/auth";
import { useSignOut } from "./useSignOut.command";

jest.mock("@/shared/repositories/auth");
jest.mock("@/error/outputErrorLog");

describe(useSignOut, () => {
	const { notify: mockNotify } = useMockErrorNotificationContext();

	const mockOutputErrorLog = jest.fn();
	toMock(outputErrorLog).mockImplementation(mockOutputErrorLog);

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("when success", () => {
		it("error func not called", async () => {
			toMock(signOut).mockResolvedValue({ data: true, error: null });

			const { signOutMutation } = useSignOut();
			await signOutMutation();

			expect(signOut).toHaveBeenCalledTimes(1);
			expect(mockNotify).not.toHaveBeenCalled();
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
			expect(mockNotify).toHaveBeenCalled();
			expect(mockOutputErrorLog).toHaveBeenCalled();
		});
	});
});
