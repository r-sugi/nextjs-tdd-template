import type { ActiveMember } from "@/core/domains/member/activeMember";
import type { PendingActivationMember } from "@/core/domains/member/pendingActivationMember";
import type { BaseSyntheticEvent } from "react";
import type { BanMemberSchema } from "../form/useBanMemberForm";

//
// Payload
//

export type EventType = (typeof eventTypes)[keyof typeof eventTypes];

export const eventTypes = {
	onClickBan: "onClickBan",
	onClickDisable: "onClickDisable",
} as const;

type OnClickBanValue = {
	member: ActiveMember | PendingActivationMember;
	reason: string;
};

type OnClickDisableValue = {
	member: ActiveMember;
};

type EventValues = {
	[eventTypes.onClickBan]: OnClickBanValue;
	[eventTypes.onClickDisable]: OnClickDisableValue;
};

type BasePayload<T extends EventType, U extends EventValues[T]> = {
	type: T;
	detail: U;
};

type BanPayload = BasePayload<"onClickBan", OnClickBanValue>;
type DisablePayload = BasePayload<"onClickDisable", OnClickDisableValue>;

type Payload = BanPayload | DisablePayload;

//
// Event Handler
//

export type OnSubmitStatusChange = (payload: Payload) => void;

export type OnClickBan<K extends ActiveMember | PendingActivationMember> = (
	member: K,
) => void;

export type OnClickDisable<K extends ActiveMember> = (member: K) => void;

export type OnSubmitDisable<K extends ActiveMember> = (member: K) => () => void;

export type OnSubmitBan<K extends ActiveMember | PendingActivationMember> = (
	member: K,
	data: BanMemberSchema,
) => void;
