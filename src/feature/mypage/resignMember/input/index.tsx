import { useRouter } from "next/router";
import type { BaseSyntheticEvent } from "react";

import { loginRequiredPages } from "@/const/paths";
import {
	type ResignMemberSchema,
	useResignMemberForm,
} from "@/feature/mypage/resignMember/hooks/form";
import { setCache } from "@/utils/cache";

export const IndexTemplate = () => {
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
	} = useResignMemberForm();

	const submitHandler = async (
		data: ResignMemberSchema,
		event?: BaseSyntheticEvent,
	) => {
		event?.preventDefault?.();

		try {
			setCache("resignMember", data);
			await router.push(loginRequiredPages.mypageResignMemberConfirm.path());
		} catch (error) {
			window.alert("TODO: エラー処理(例: 入力値のバリデーションエラーなど)");
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

				<button type="submit" disabled={!isValid || isSubmitting}>
					退会する
				</button>
			</form>
		</div>
	);
};
