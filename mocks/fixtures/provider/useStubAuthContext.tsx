import jest from "jest-mock";

const setMember =
	process.env.NODE_ENV === "test" || process.env.RUNTIME === "storybook"
		? jest.fn()
		: undefined;

export const stubAuthContext = {
	signedIn: {
		member: {
			uid: "1",
		},
		setMember,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} as unknown,
	signedOut: {
		member: null,
		setMember,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} as unknown,
};
