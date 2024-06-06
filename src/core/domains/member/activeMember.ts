import type { memberStatus } from "./status";
// DBから取得したentityを扱うための型定義
export type ActiveMember = {
	status: (typeof memberStatus)["active"];
	statusActivityId: string;
	memberId: string;
	address: string;
	postalCode: string;
	email: string;
	birthday: Date;
	createdAt: Date;
};

// TODO: バリデーションロジック

// TODO: 関数で上記タイプのオブジェクトを操作する
