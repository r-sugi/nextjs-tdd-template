import { toMock } from "@/__testing__/helper";
import {
	type ErrorNotificationStore,
	useErrorNotificationContext,
} from "../ErrorNotificationContext";

jest.mock("@/feature/error/banner/ErrorNotificationContext");

export const useMockErrorNotificationContext = (): ErrorNotificationStore => {
	const mockNotify = jest.fn();
	const mockClear = jest.fn();

	const value = {
		items: [],
		notify: mockNotify,
		clear: mockClear,
	};

	toMock(useErrorNotificationContext).mockImplementation(() => {
		return value;
	});

	return value;
};
