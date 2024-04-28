import { BaseSyntheticEvent, FC } from "react";
import { useResignMember } from "@/core/usecases/member/useResignMember.command";

import {
  ResignMemberSchema,
  useResignMemberForm,
} from "@/feature/mypage/resignMember/hooks/form";

type Props = {};

export const InputTemplate: FC<Props> = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
  } = useResignMemberForm();

  const resignMemberMutation = useResignMember();

  const submitHandler = async (
    data: ResignMemberSchema,
    event?: BaseSyntheticEvent
  ) => {
    event && event.preventDefault();

    try {
      const res = await resignMemberMutation(
        {
          reasonType: data.reasonType,
          reasonDetail: data.reasonDetail,
          agreement: data.agreement,
        },
        {
          onError: async () => {
            // TODO: エラー処理(例: 退会に失敗しました)
          },
        }
      );
      console.log(`res: ${res}`);
      window.alert("退会しました!");
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
          {errors.reasonType?.message && <p>{errors.reasonType.message}</p>}
        </div>

        <div>
          <label>詳細</label>
          <textarea {...register("reasonDetail")} />
          {errors.reasonDetail?.message && <p>{errors.reasonDetail.message}</p>}
        </div>

        <div>
          <label htmlFor="agreement">同意する</label>
          <input type="checkbox" {...register("agreement")} id="agreement" />
          {errors.agreement?.message && <p>{errors.agreement.message}</p>}
        </div>

        <button disabled={!isValid || isSubmitting}>退会する</button>
      </form>
    </div>
  );
};
