import { z } from "zod";

import { agreement, reasonDetail, reasonType } from "./validation";

describe("validation", () => {
	describe("agreement", () => {
		it("true is valid", () => {
			const valid = agreement().parse(true);
			expect(valid).toBeTruthy();
		});
		it("false is invalid", () => {
			expect(() => agreement().parse(false)).toThrow(
				new z.ZodError([
					{
						code: "custom",
						message: "同意が必要です",
						path: [],
					},
				]),
			);
		});
	});
	describe("reasonDetail", () => {
		it("valid", () => {
			const valid = reasonDetail().parse("a");
			expect(valid).toBeTruthy();
		});
		it("invalid", () => {
			expect(() => reasonDetail().parse("12345678901")).toThrow(
				new z.ZodError([
					{
						code: "custom",
						message: "10文字以内で入力してください",
						path: [],
					},
				]),
			);
		});
	});
	describe("reasonType", () => {
		it("NO_USE is valid", () => {
			const valid = reasonType().parse("NO_USE");
			expect(valid).toBeTruthy();
		});
		it("OTHER is valid", () => {
			const valid = reasonType().parse("OTHER");
			expect(valid).toBeTruthy();
		});
		it("invalid", () => {
			expect(() => reasonType().parse("")).toThrow(
				new z.ZodError([
					{
						code: "custom",
						message: "選択してください",
						path: [],
					},
				]),
			);
		});
	});
});
