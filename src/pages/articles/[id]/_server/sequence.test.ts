import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { type SequenceBeforeAction, DefaultErrorResult, type SequenceOptions, sequence } from "./sequence";

const isValidSchema: SequenceBeforeAction = async (context) => {
	if (!context.params?.type) {
		throw new Error("schema error");
	}
};

const act: GetServerSideProps<{ user: string }> = async (_) => ({
	props: { user: "userId" },
});

const contexts = (() => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const defaults: GetServerSidePropsContext<any, any> = {
		req: {} as never,
		res: {} as never,
		query: {},
		resolvedUrl: "",
		params: {
			type: "type",
		},
	};

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const noTypePropOnParam: GetServerSidePropsContext<any, any> = {
		...defaults,
		params: {},
	};

	return {
		defaults,
		noTypePropOnParam,
	};
})();

describe("sequence", () => {
	it("レスポンスを返却できる", async () => {
		const { defaults: context } = contexts;
		const action = sequence<{ user: string }, { type: string }>(
			[isValidSchema],
			act,
		);
		const actual = await action(context);
		const expected = { props: { user: "userId" } };
		expect(expected).toEqual(actual);
	});

	it("preAction でエラーが発生した場合、エラーを返却できる", async () => {
		const { noTypePropOnParam: context } = contexts;
		const action = sequence<{ user: string }>([isValidSchema], act);
		const actual = await action(context);
		const expected = { props: { error: new Error("schema error") } };
		expect(expected).toEqual(actual);
	});
});
