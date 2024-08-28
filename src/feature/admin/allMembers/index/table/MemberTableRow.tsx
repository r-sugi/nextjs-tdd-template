import type { AllMember } from "@/core/domains/member/member";
import type { FC } from "react";
import { ActiveMemberRow } from "./ActiveMemberRow";
import { PendingActivationMemberRow } from "./PendingActivationMemberRow";

type Prop = {
	member: AllMember;
};

export const MemberTableRow: FC<Prop> = ({ member }) => {
	switch (member.status) {
		case "active":
			return <ActiveMemberRow member={member} />;
		case "pendingActivation":
			return <PendingActivationMemberRow member={member} />;
	}
};
