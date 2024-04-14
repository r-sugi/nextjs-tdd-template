import { memberStatus } from "./status";
// DBから取得したentityを扱うための型定義
export type ActiveMember = {
  status: (typeof memberStatus)["active"];
  statusActivityId: number;
  memberId: number;
  address: string;
  postalCode: string;
  birthday: Date;
  createdAt: Date;
};

// TODO: バリデーションロジック

// TODO: 関数で上記タイプのオブジェクトを操作する
