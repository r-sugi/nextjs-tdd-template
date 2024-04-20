import { memberStatus } from "./status";
// DBから取得したentityを扱うための型定義
export type BannedMember = {
  status: (typeof memberStatus)["banned"];
  statusActivityId: string;
  memberId: string;
  reason: string;
  operatedBy: string;
  createdAt: Date;
};

// TODO: バリデーションロジック

// TODO: 関数で上記タイプのオブジェクトを操作する
