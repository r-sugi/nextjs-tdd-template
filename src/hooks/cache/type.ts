export type ResignMember = {
  reasonType: string;
  reasonDetail: string | null;
  agreement: boolean;
};

export type SessionStorageKeyValues = {
  resignMember: ResignMember;
};
