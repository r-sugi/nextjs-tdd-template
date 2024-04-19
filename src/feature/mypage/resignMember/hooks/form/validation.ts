import { z } from "zod";

export const agreement = () =>
  z.boolean().refine((val) => val, {
    message: "同意が必要です",
  });

export const reasonDetail = () =>
  z.string().transform((value, ctx) => {
    if (value.length > 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "10文字以内で入力してください",
      });
    }
    return value === "" ? null : value;
  });

export const reasonType = () =>
  z.string().refine((val) => ["NO_USE", "OTHER"].includes(val), {
    message: "選択してください",
  });
