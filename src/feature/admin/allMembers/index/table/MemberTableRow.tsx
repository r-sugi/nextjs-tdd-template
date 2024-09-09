import { Button, Dialog } from "@/components";
import type { AllMember } from "@/core/domains/member/member";

import { DialogBody } from "@/components/dialog/Dialog";
import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import { type BaseSyntheticEvent, type FC, useRef } from "react";
import {
	type BanMemberSchema,
	useBanMemberForm,
} from "../form/useBanMemberForm";
import { ActiveMemberRow } from "./ActiveMemberRow";
import { PendingActivationMemberRow } from "./PendingActivationMemberRow";
import {
	type OnClickBan,
	type OnClickDisable,
	type OnSubmitStatusChange,
	eventTypes,
} from "./type";

type Prop = {
	member: AllMember;
	onSubmit: OnSubmitStatusChange;
};

export const MemberTableRow: FC<Prop> = ({ member, onSubmit }) => {
	const ref = useRef<HTMLDialogElement>(null);
	const disableDialogRef = useRef<HTMLDialogElement>(null);

	const onClickBan: OnClickBan<ActiveMember | PendingActivationMember> = (
		member,
	) => {
		console.log("onClickBan", member);
		ref.current?.showModal();
	};

	const onClickDisable: OnClickDisable<ActiveMember> = (member) => {
		console.log("onClickDisable", member);
		disableDialogRef.current?.showModal();
	};

	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		banMemberLabels,
		reset,
	} = useBanMemberForm();

	const onSubmitBan = <K extends ActiveMember | PendingActivationMember>(
		member: K,
	) => {
		return (data: BanMemberSchema, event?: BaseSyntheticEvent) => {
			event?.preventDefault?.();
			console.log("onSubmitBan");

			// close dialog
			ref.current?.close();
			// reset form state
			reset();

			// call mutation
			onSubmit({
				type: eventTypes.onClickBan,
				detail: {
					member,
					reason: data.reason,
				},
			});
		};
	};

	const onSubmitDisable = <K extends ActiveMember>(member: K) => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		return (e: any) => {
			e.preventDefault();
			console.log("onSubmitDisable");

			// close dialog
			disableDialogRef.current?.close();
			// reset form state
			reset();

			// call mutation
			onSubmit({
				type: eventTypes.onClickDisable,
				detail: { member },
			});
		};
	};

	switch (member.status) {
		case "active":
			return (
				<>
					<ActiveMemberRow
						member={member}
						onClickBan={onClickBan}
						onClickDisable={onClickDisable}
					/>
					{/* to Ban */}
					<Dialog ref={ref}>
						<DialogBody>
							<h2
								className="text-std-24B-5 desktop:text-std-28B-5"
								id="example-heading1"
							>
								BAN
							</h2>
							<p className="text-std-16N-7">
								ダイアログの補助テキストが入ります。
							</p>
							<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
								<form onSubmit={handleSubmit(onSubmitBan(member))}>
									<div>
										<label htmlFor="reason">{banMemberLabels.reason}</label>
										<textarea id="reason" {...register("reason")} />
										{errors.reason?.message && <p>{errors.reason.message}</p>}
									</div>

									<Button
										size="lg"
										variant="primary"
										disabled={!isValid || isSubmitting}
									>
										送信
									</Button>
									<Button
										onClick={(e) => {
											e.preventDefault();
											reset();
											ref.current?.close();
										}}
										size="lg"
										variant="tertiary"
									>
										キャンセル
									</Button>
								</form>
							</div>
						</DialogBody>
					</Dialog>
					{/* to Disable */}
					<Dialog ref={disableDialogRef}>
						<DialogBody>
							<h2
								className="text-std-24B-5 desktop:text-std-28B-5"
								id="example-heading1"
							>
								Disable
							</h2>
							<p className="text-std-16N-7">
								ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
							</p>
							<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
								<Button
									onClick={onSubmitDisable(member)}
									size="lg"
									variant="primary"
								>
									無効化する
								</Button>
								<Button
									onClick={() => {
										disableDialogRef.current?.close();
									}}
									size="lg"
									variant="tertiary"
								>
									キャンセル
								</Button>
							</div>
						</DialogBody>
					</Dialog>
				</>
			);
		case "pendingActivation":
			return (
				<>
					<PendingActivationMemberRow member={member} onClickBan={onClickBan} />
					{/* to Disable */}
					<Dialog ref={ref}>
						<DialogBody>
							<h2
								className="text-std-24B-5 desktop:text-std-28B-5"
								id="example-heading1"
							>
								BAN
							</h2>
							<p className="text-std-16N-7">
								ダイアログの補助テキストが入ります。
							</p>
							<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
								<form onSubmit={handleSubmit(onSubmitBan(member))}>
									<div>
										<label htmlFor="reason">{banMemberLabels.reason}</label>
										<textarea id="reason" {...register("reason")} />
										{errors.reason?.message && <p>{errors.reason.message}</p>}
									</div>

									<Button
										size="lg"
										variant="primary"
										disabled={!isValid || isSubmitting}
									>
										送信
									</Button>
									<Button
										onClick={(e) => {
											e.preventDefault();
											reset();
											ref.current?.close();
										}}
										size="lg"
										variant="tertiary"
									>
										キャンセル
									</Button>
								</form>
							</div>
						</DialogBody>
					</Dialog>
				</>
			);
	}
};
