"use client";
import { useRouter } from "next/router";
import { type BaseSyntheticEvent, type FC, useEffect } from "react";

import { loginRequiredPages } from "@/const/paths";
import { useResignMember } from "@/core/usecases/member/useResignMember.command";
import {
	type ResignMemberSchema,
	useResignMemberForm,
} from "@/feature/mypage/resignMember/hooks/form";
import { getCache, removeCache } from "@/utils/cache";
import { sessionKeys } from "@/utils/cache/type";

import { ErrorBoundary } from "./errorBoundary";

const Template: FC = () => {
	const router = useRouter();
	const cache = getCache(sessionKeys.resignMember);

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

		try {
			const res = await resignMemberMutation(
				{
					reasonType: data.reasonType,
					reasonDetail: data.reasonDetail,
					agreement: data.agreement,
				},
				{
					onError: () => {
						window.alert("退会に失敗しました!");
					},
				},
			);
			removeCache("resignMember");
			window.alert(`退会しました! ${res}`);
			// TODO: バッチ処理で1日1回程度、firebase.authからもログアウトさせる
		} catch (error) {
			debugger;
			window.alert("TODO: エラー処理(例: 入力値のバリデーションエラーなど)");
		}
	};

	useEffect(() => {
		// リロード時に確認ダイアログを表示
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			return;
		};

		// FIXME: ページ遷移 (router.push)時に確認ダイアログを表示
		// FIXME: ページ遷移 (router.back)時に確認ダイアログを表示
		// FIXME: ページ遷移 (aタグ)時に確認ダイアログを表示

		window.addEventListener("beforeunload", handleBeforeUnload);
		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	return (
		<div data-testid={loginRequiredPages.mypageResignMemberConfirm.path()}>
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

export const IndexTemplate: FC = () => {
	return (
		<ErrorBoundary>
			<Template />
		</ErrorBoundary>
	);
};
