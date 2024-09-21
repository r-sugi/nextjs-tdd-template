import type { AllMember } from "@/core/domains/member/member";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import { type FC, useState } from "react";
import { BanDialog } from "../dialog/BanDialog";
import { DisableDialog } from "../dialog/DisableDialog";
import { ActiveMemberRow } from "./ActiveMemberRow";
import { PendingActivationMemberRow } from "./PendingActivationMemberRow";
import {
	type EventType,
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

type DialogState = Record<EventType, boolean>;
const initialDialogState = {
	onClickBan: false,
	onClickDisable: false,
} as const satisfies DialogState;

export const MemberTableRow: FC<Prop> = ({ member, onSubmit }) => {
	const [dialogState, setToggleModal] =
		useState<DialogState>(initialDialogState);

	const onClickBan: OnClickBan<ActiveMember | PendingActivationMember> = () => {
		setToggleModal((prev) => ({ ...prev, onClickBan: true }));
	};

	const onClickDisable: OnClickDisable<ActiveMember> = () => {
		setToggleModal((prev) => ({ ...prev, onClickDisable: true }));
	};

	const onSubmitBan: OnSubmitBan<ActiveMember | PendingActivationMember> = (
		member,
		data,
	) => {
		setToggleModal((prev) => ({ ...prev, onClickBan: false }));

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
			setToggleModal((prev) => ({ ...prev, onClickDisable: false }));

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
						opened={dialogState.onClickBan}
						member={member}
						onSubmitBan={onSubmitBan}
						onClose={() => {
							setToggleModal((prev) => ({ ...prev, onClickBan: false }));
						}}
					/>
					<DisableDialog
						opened={dialogState.onClickDisable}
						member={member}
						onSubmitDisable={onSubmitDisable}
						onClose={() => {
							setToggleModal((prev) => ({ ...prev, onClickDisable: false }));
						}}
					/>
				</>
			);
		case "pendingActivation":
			return (
				<>
					<PendingActivationMemberRow member={member} onClickBan={onClickBan} />
					<BanDialog
						opened={dialogState.onClickBan}
						member={member}
						onSubmitBan={onSubmitBan}
						onClose={() => {
							setToggleModal((prev) => ({ ...prev, onClickBan: false }));
						}}
					/>
				</>
			);
	}
};
