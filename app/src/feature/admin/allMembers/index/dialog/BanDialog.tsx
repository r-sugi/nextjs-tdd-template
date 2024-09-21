import { Button, Dialog } from "@/components";
import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import type { BaseSyntheticEvent } from "react";
import {
	type BanMemberSchema,
	useBanMemberForm,
} from "../form/useBanMemberForm";
import type { OnSubmitBan } from "../table/type";
import { DialogBody } from "@/components/dialog/Dialog";

type props = {
	opened: boolean;
	member: ActiveMember | PendingActivationMember;
	onSubmitBan: OnSubmitBan<ActiveMember | PendingActivationMember>;
	onClose: () => void;
};

export const BanDialog = ({
	opened,
	member,
	onSubmitBan: onSubmit,
	onClose,
}: props) => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValid, errors },
		reset,
		banMemberLabels,
	} = useBanMemberForm();

	const onSubmitBan = (data: BanMemberSchema, event?: BaseSyntheticEvent) => {
		event?.preventDefault();
		reset();
		onSubmit(member, data);
	};

	return (
		<Dialog open={opened} handleClose={onClose} isModal>
			<DialogBody>
				{/* bodytitle */}
				<h2
					className="text-std-24B-5 desktop:text-std-28B-5"
					id="example-heading1"
				>
					BAN
				</h2>
				{/* body */}
				<p className="text-std-16N-7">ダイアログの補助テキストが入ります。</p>

				{/* form */}
				<div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
					{/* action */}
					<form onSubmit={handleSubmit(onSubmitBan)}>
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
						<Button onClick={onClose} size="lg" variant="tertiary">
							キャンセル
						</Button>
					</form>
				</div>
			</DialogBody>
		</Dialog>
	);
};
