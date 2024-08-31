import { Button, Dialog } from "@/components";
import { DialogBody } from "@/components/dialog/Dialog";
import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { AllMember } from "@/core/domains/member/member";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";

import { type FC, useRef } from "react";
import { ActiveMemberRow } from "./ActiveMemberRow";
import { PendingActivationMemberRow } from "./PendingActivationMemberRow";

type Prop = {
	member: AllMember;
};

// TODO: 型
// type OnClickDelete =
// 	| ((member: ActiveMember) => void)
// 	| ((member: PendingActivationMember) => void);
// // TODO: 型
// type OnClickDisable = (member: ActiveMember) => void;

export const MemberTableRow: FC<Prop> = ({ member }) => {
	// 1 DONE const ref = useRef でrefを定義する
	// 2 DONE <Dialog ref={ref}>　でDOMを定義する
	// 3 DONE イベント受け取って、ref.current?.showModal();　で表示する

	// 4　どのイベントか判別するための条件分岐(型制約)
	// 5 dialogからsumitイベントを受け取る
	// 6 API通信する
	const ref = useRef<HTMLDialogElement>(null);
	const onClickDelete = (member: ActiveMember | PendingActivationMember) => {
		console.log("onClickDelete", member);
		ref.current?.showModal();
	};
	const onClickDisable = (member: ActiveMember) => {
		console.log("onClickDisable", member);
		ref.current?.showModal();
		// // mutate
		// console.log("TODO: mutate", member);
		// // refresh cache
		// console.log("TODO: refresh cache", member);
	};
	const onSubmitDelete = () => {
		// // mutate
		// console.log("TODO: mutate", member);
		// // refresh cache
		// console.log("TODO: refresh cache", member);
	};
	const onSubmitDisable = () => {
		// // mutate
		// console.log("TODO: mutate", member);
		// // refresh cache
		// console.log("TODO: refresh cache", member);
	};

	switch (member.status) {
		case "active":
			return (
				<>
					<ActiveMemberRow
						member={member}
						onClickDelete={onClickDelete}
						onClickDisable={onClickDisable}
					/>
					<Dialog ref={ref}>
						<DialogBody>
							<h2
								className="text-std-24B-5 desktop:text-std-28B-5"
								id="example-heading1"
							>
								Activeタイトル
							</h2>
							<p className="text-std-16N-7">
								{""}
								ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
							</p>
							<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
								<Button
									onClick={() => {
										ref.current?.close();
									}}
									size="lg"
									variant="primary"
								>
									{"削除する or"}
									{"無効化する"}
								</Button>
								<Button
									onClick={() => {
										ref.current?.close();
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
					<PendingActivationMemberRow
						member={member}
						onClickDelete={onClickDelete}
					/>
					<Dialog ref={ref}>
						<DialogBody>
							<h2
								className="text-std-24B-5 desktop:text-std-28B-5"
								id="example-heading1"
							>
								Pendingタイトル
							</h2>
							<p className="text-std-16N-7">
								{""}
								ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
							</p>
							<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
								<Button
									onClick={() => {
										ref.current?.close();
									}}
									size="lg"
									variant="primary"
								>
									{"削除する or"}
									{"無効化する"}
								</Button>
								<Button
									onClick={() => {
										ref.current?.close();
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
	}
};
