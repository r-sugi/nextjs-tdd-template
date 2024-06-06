type ResignMember = {
	reasonType: string;
	reasonDetail: string | null;
	agreement: boolean;
};

export const sessionKeys = {
	resignMember: "resignMember",
} as const;

export type SessionStorageKeys = (typeof sessionKeys)[keyof typeof sessionKeys];

export type SessionStorageKeyValues = {
	[sessionKeys.resignMember]: ResignMember;
};
