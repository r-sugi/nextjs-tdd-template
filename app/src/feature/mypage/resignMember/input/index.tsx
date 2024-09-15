import { useRouter } from "next/router";
import type { BaseSyntheticEvent } from "react";

import { loginRequiredPages } from "@/const/paths";
import {
	type ResignMemberSchema,
	useResignMemberForm,
} from "@/feature/mypage/resignMember/hooks/form";
import { setCache } from "@/utils/cache";

export default function IndexTemplate() {
	const router = useRouter();
	const {
		resignMemberLabels,
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
	} = useResignMemberForm();

	const submitHandler = async (
		data: ResignMemberSchema,
		event?: BaseSyntheticEvent,
	) => {
		event?.preventDefault?.();
		setCache("resignMember", data);
		await router.push(loginRequiredPages.mypageResignMemberConfirm.path());
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit((data, event) => submitHandler(data, event))}
			>
				<div>
					<label id="reasonType">{resignMemberLabels.reasonType}</label>
					<select aria-labelledby="reasonType" {...register("reasonType")}>
						<option value="">選択してください</option>
						<option value="NO_USE">利用しないため</option>
						<option value="OTHER">その他</option>
					</select>
					{errors.reasonType?.message && <p>{errors.reasonType.message}</p>}
				</div>

				<div>
					<label htmlFor="reasonDetail">
						{resignMemberLabels.reasonDetail}
					</label>
					<textarea id="reasonDetail" {...register("reasonDetail")} />
					{errors.reasonDetail?.message && <p>{errors.reasonDetail.message}</p>}
				</div>

				<div>
					<label htmlFor="agreement">{resignMemberLabels.agreement}</label>
					<input type="checkbox" id="agreement" {...register("agreement")} />
					{errors.agreement?.message && <p>{errors.agreement.message}</p>}
				</div>

				<button type="submit" disabled={!isValid || isSubmitting}>
					退会する
				</button>
			</form>
		</div>
	);
}
