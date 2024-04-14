import { string } from "yup";
import { InferType, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// TODO:スキーマをテストする(不正な値からガードする) + DBのカラムに制約をつける(長さとか)
const resignMemberSchema = object({
  reasonType: string()
    .required("選択してください")
    .oneOf(["NO_USE", "OTHER"], "選択してください"),
  reasonDetail: string().max(50, "100文字以内で入力してください"),
  agreement: string().required("選択してください").matches(/true/),
});

export type ResignMemberSchema = InferType<typeof resignMemberSchema>;

export const useResignMemberForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
    setError,
  } = useForm({
    resolver: yupResolver(resignMemberSchema), // TODO: zodにする
    shouldFocusError: true,
    mode: "onChange",
  });

  return {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
    setError,
  };
};
