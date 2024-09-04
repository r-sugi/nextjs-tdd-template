import { Button, Dialog } from "@/components";
import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { AllMember } from "@/core/domains/member/member";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";

import { DialogBody } from "@/components/dialog/Dialog";
import { type FC, useRef } from "react";
import { ActiveMemberRow } from "./ActiveMemberRow";
import { PendingActivationMemberRow } from "./PendingActivationMemberRow";

type Prop = {
	member: AllMember;
};

type onClickBan = <K extends PendingActivationMember | ActiveMember>(
	member: K,
) => void;
type onSubmitBan = <K extends PendingActivationMember | ActiveMember>(
	member: K,
	reason: string,
) => void;

type OnClickDisable = <K extends ActiveMember>(member: K) => void;
type onSubmitDisable = <K extends ActiveMember>(member: K) => void;

export const MemberTableRow: FC<Prop> = ({ member }) => {
	// 1 DONE const ref = useRef でrefを定義する
	// 2 DONE <Dialog ref={ref}>　でDOMを定義する
	// 3 DONE イベント受け取って、ref.current?.showModal();　で表示する

	// 4　どのイベントか判別するための条件分岐(型制約)
	// 5 モーダル表示する
	// 6 dialogからsumitイベントを受け取る
	// 7 API通信する
	const ref = useRef<HTMLDialogElement>(null);
	const onClickBan: onClickBan = (member) => {
		console.log("onClickDisable", member);
		// TODO: statusじゃなくて一意に特定できるタグの方が良いかも、、
		if (member.status === "active") {
			ref.current?.showModal();
		} else if (member.status === "pendingActivation") {
			ref.current?.showModal();
		}
	};
	const onClickDisable: OnClickDisable = (member) => {
		console.log("onClickDisable", member);
		ref.current?.showModal();
	};
	const onSubmitBan: onSubmitBan = (member, reason) => {
		// // mutate
		console.log(member, reason, "current_member_id");
		// // refresh cache
		// console.log("TODO: refresh cache", member);
	};
	const onSubmitDisable: onSubmitDisable = (member) => {
		// // mutate
		console.log(member);
		// // refresh cache
		// console.log("TODO: refresh cache", member);
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
								強制退会する
							</h2>
							<p className="text-std-16N-7">
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
									強制退会する
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
					{/* to Disable */}
					<Dialog ref={ref}>
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
									onClick={() => {
										ref.current?.close();
									}}
									size="lg"
									variant="primary"
								>
									無効化する
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
					<PendingActivationMemberRow member={member} onClickBan={onClickBan} />
					{/* to Disable */}
					<Dialog ref={ref}>
						<DialogBody>
							<h2
								className="text-std-24B-5 desktop:text-std-28B-5"
								id="example-heading1"
							>
								無効化します
							</h2>
							<p className="text-std-16N-7">
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
									無効化する
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
