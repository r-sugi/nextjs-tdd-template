import MemberEntity from "@/core/domain/entity/MemberEntity";
import { BaseFactory } from "../factory/base-factory";

interface IMemberFactory {
  // TODO: よくわからん
  createActiveMember: (params: ItemFactoryParams) => MemberEntity;
}

type ItemFactoryParams = {
  statusActivityId: number;
  memberId: number;
  address: string;
  postalCode: string;
  birthday: Date;
  createdAt: Date;
};

export default class MemberFactory
  extends BaseFactory
  implements IMemberFactory
{
  createActiveMember(params: ItemFactoryParams): MemberEntity {
    const seed = {
      ...params,
    };
    debugger;
    // TODO: ドメインルールをかく
    return this.createEntity(MemberEntity, seed);
  }
}
