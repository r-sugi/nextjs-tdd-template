import { BaseSyntheticEvent, FC } from "react";
import { resignMember } from "@/core/usecase/members/resignMember.usecase";
import { ResignMemberErrorBoundary } from "./resignMemberErrorBoundary";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  ResignMemberSchema,
  resignMemberSchema,
} from "@/components/molecules/form/Mypage/ResignMember";

type Props = {};

export const IndexTemplate: FC<Props> = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
    setError,
  } = useForm({
    resolver: yupResolver(resignMemberSchema),
    shouldFocusError: true,
    mode: "onChange",
  });

  const submitHandler = async (
    data: ResignMemberSchema,
    event?: BaseSyntheticEvent
  ) => {
    event && event.preventDefault();

    try {
      // TODO: 値を渡す
      await resignMember({ reason: "", reason_detail: "", reason_type: "" });
    } catch (error) {
      // TODO: エラー処理(例: 入力値のバリデーションエラーなど)
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data, event) => submitHandler(data, event))}
      >
        <div>
          <label>退会理由</label>
          <select {...register("reasonType")}>
            <option value="">選択してください</option>
            <option value="NO_USE">利用しないため</option>
            <option value="OTHER">その他</option>
          </select>
        </div>

        <div>
          <label>詳細</label>
          <textarea {...register("reasonDetail")} />
        </div>

        <div>
          <label htmlFor="agreement">同意する</label>
          <input
            type="checkbox"
            {...register("agreement")}
            value="true"
            id="agreement"
          />
          {errors.agreement?.message && <p>{errors.agreement.message}</p>}
        </div>

        <button disabled={!isValid || isSubmitting}>退会する</button>
      </form>
    </div>
  );
};

export const ResignMemberTemplate: FC<Props> = () => {
  return (
    <ResignMemberErrorBoundary>
      <IndexTemplate />
    </ResignMemberErrorBoundary>
  );
};
