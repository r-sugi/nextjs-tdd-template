import { Button, Dialog } from "@/components";
import { DialogBody } from "@/components/dialog/Dialog";
import type { ActiveMember } from "@/core/domains/member/activeMember";
import { forwardRef } from "react";
import type { OnSubmitDisable } from "../table/type";

type props = {
	member: ActiveMember;
	onSubmitDisable: OnSubmitDisable<ActiveMember>;
	onClose: () => void;
};

export const DisableDialog = forwardRef<HTMLDialogElement, props>(
	function dialog({ member, onSubmitDisable, onClose }, ref) {
		return (
			<Dialog ref={ref}>
				<DialogBody>
					{/* bodytitle */}
					<h2
						className="text-std-24B-5 desktop:text-std-28B-5"
						id="example-heading1"
					>
						Disable status is:{member.status}
					</h2>
					{/* body */}
					<p className="text-std-16N-7">
						ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
					</p>
					{/* form */}
					<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
						{/* action */}
						<Button
							onClick={onSubmitDisable(member)}
							size="lg"
							variant="primary"
						>
							無効化する
						</Button>
						<Button onClick={onClose} size="lg" variant="tertiary">
							キャンセル
						</Button>
					</div>
				</DialogBody>
			</Dialog>
		);
	},
);
