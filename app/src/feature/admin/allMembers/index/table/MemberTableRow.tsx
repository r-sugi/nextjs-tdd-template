import type { AllMember } from "@/core/domains/member/member";

import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import { type FC, useState } from "react";
import { BanDialog } from "../dialog/BanDialog";
import { DisableDialog } from "../dialog/DisableDialog";
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
	// TODO: 'none' | 'pendingActivation' | 'active';
	const [modalOpened, setToggleModal] = useState<boolean>(false);

	const onClickBan: OnClickBan<ActiveMember | PendingActivationMember> = (
		member,
	) => {
		console.log("onClickBan", member);
		setToggleModal(true);
	};

	const onClickDisable: OnClickDisable<ActiveMember> = (member) => {
		console.log("onClickDisable", member);
		setToggleModal(true);
	};

	const onSubmitBan: OnSubmitBan<ActiveMember | PendingActivationMember> = (
		member,
		data,
	) => {
		setToggleModal(false);

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
			setToggleModal(false);
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
						opened={modalOpened}
						member={member}
						onSubmitBan={onSubmitBan}
						onClose={() => {
							setToggleModal(false);
						}}
					/>
					<DisableDialog
						opened={modalOpened}
						member={member}
						onSubmitDisable={onSubmitDisable}
						onClose={() => {
							setToggleModal(false);
						}}
					/>
				</>
			);
		case "pendingActivation":
			return (
				<>
					<PendingActivationMemberRow member={member} onClickBan={onClickBan} />
					<BanDialog
						opened={modalOpened}
						member={member}
						onSubmitBan={onSubmitBan}
						onClose={() => {
							setToggleModal(false);
						}}
					/>
				</>
			);
	}
};
