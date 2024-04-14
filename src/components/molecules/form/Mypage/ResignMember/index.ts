import { string } from "yup";
import { InferType, object } from "yup";

// TODO:スキーマをテストする(不正な値からガードする) + DBのカラムに制約をつける(長さとか)
export const resignMemberSchema = object({
  reasonType: string()
    .required("選択してください")
    .oneOf(["NO_USE", "OTHER"], "選択してください"),
  reasonDetail: string().max(50, "100文字以内で入力してください"),
  agreement: string().required("選択してください").matches(/true/),
});

export type ResignMemberSchema = InferType<typeof resignMemberSchema>;
