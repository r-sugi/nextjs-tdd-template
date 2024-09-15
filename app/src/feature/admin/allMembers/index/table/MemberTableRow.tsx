import { Button, Dialog } from "app/src/components";
import type { AllMember } from "app/src/core/domains/member/member";

import { DialogBody } from "app/src/components/dialog/Dialog";
import type { ActiveMember } from "app/src/core/domains/member/activeMember";
import type { PendingActivationMember } from "app/src/core/domains/member/pendingActivationMember";
import { type BaseSyntheticEvent, type FC, useRef } from "react";
import { isValid } from "zod";
import { BanDialog } from "../dialog/BanDialog";
import { DisableDialog } from "../dialog/DisableDialog";
import type { BanMemberSchema } from "../form/useBanMemberForm";
import { ActiveMemberRow } from "./ActiveMemberRow";
import { PendingActivationMemberRow } from "./PendingActivationMemberRow";
import {
	type OnClickBan,
	type OnClickDisable,
	type OnSubmitBan,
	type OnSubmitDisable,
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

	const onSubmitBan: OnSubmitBan<ActiveMember | PendingActivationMember> = (
		member,
		data,
	) => {
		ref.current?.close();

		// call mutation
		onSubmit({
			type: eventTypes.onClickBan,
			detail: {
				member,
				reason: data.reason,
			},
		});
	};

	const onSubmitDisable: OnSubmitDisable<ActiveMember> = (member) => {
		return () => {
			console.log("onSubmitDisable");

			// close dialog
			disableDialogRef.current?.close();
			// reset form state

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
					<BanDialog
						member={member}
						onSubmitBan={onSubmitBan}
						onClose={() => {
							ref.current?.close();
						}}
					/>
					<DisableDialog
						ref={disableDialogRef}
						member={member}
						onSubmitDisable={onSubmitDisable}
						onClose={() => {
							disableDialogRef.current?.close();
						}}
					/>
				</>
			);
		case "pendingActivation":
			return (
				<>
					<PendingActivationMemberRow member={member} onClickBan={onClickBan} />
					<BanDialog
						member={member}
						onSubmitBan={onSubmitBan}
						onClose={() => {
							ref.current?.close();
						}}
					/>
				</>
			);
	}
};
