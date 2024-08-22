import { useRouter } from "next/router";
import { type BaseSyntheticEvent, type FC, useEffect, useMemo } from "react";

import { loginRequiredPages, publicPages } from "@/const/paths";
import { useResignMember } from "@/core/usecases/member/useResignMember.command";
import {
	type ResignMemberSchema,
	useResignMemberForm,
} from "@/feature/mypage/resignMember/hooks/form";
import { getCache, removeCache } from "@/utils/cache";
import { sessionKeys } from "@/utils/cache/type";

import { ErrorBoundary as ConfirmErrorBoundary } from "./errorBoundary";

const Template: FC = () => {
	const router = useRouter();
	const cache = useMemo(() => getCache(sessionKeys.resignMember), []);

	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
	} = useResignMemberForm({
		defaultValues: cache,
	});

	const resignMemberMutation = useResignMember();

	const submitHandler = async (
		data: ResignMemberSchema,
		event?: BaseSyntheticEvent,
	) => {
		event?.preventDefault?.();

		const res = await resignMemberMutation({
			reasonType: data.reasonType,
			reasonDetail: data.reasonDetail,
			agreement: data.agreement,
		});

		if (!res.data) {
			return;
		}
		removeCache("resignMember");
		await router.push(publicPages.index.path());
	};

	useEffect(() => {
		// リロード時に確認ダイアログを表示
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			return;
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	return (
		<div data-testid={"mypage-resign-member-confirm"}>
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
			<button
				type="button"
				onClick={(e) => {
					e.preventDefault();
					router.push(loginRequiredPages.mypageResignMemberInput.path());
				}}
			>
				戻る
			</button>
		</div>
	);
};

export default function IndexTemplate() {
	return (
		<ConfirmErrorBoundary>
			<Template />
		</ConfirmErrorBoundary>
	);
}
