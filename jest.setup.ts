import "@testing-library/jest-dom";

// TODO: 不要なら削除したい
import "whatwg-fetch";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "/",
			query: {},
			asPath: "/",
			basePath: "",
			push: jest.fn().mockResolvedValue(true),
			replace: jest.fn().mockResolvedValue(true),
			reload: jest.fn(),
			back: jest.fn(),
			prefetch: jest.fn().mockResolvedValue(undefined),
			beforePopState: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
				emit: jest.fn(),
			},
			isFallback: false,
		};
	},
}));
