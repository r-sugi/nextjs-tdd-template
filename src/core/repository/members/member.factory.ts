import ActiveMemberEntity from "@/core/domain/entity/activeMember.entity";
import { BaseFactory } from "../factory/base.factory";

type ActiveMemberFactoryParams = {
  statusActivityId: number;
  memberId: number;
  address: string;
  postalCode: string;
  birthday: Date;
  createdAt: Date;
};

interface IMemberFactory {
  // TODO: よくわからん
  createActiveMember: (params: ActiveMemberFactoryParams) => ActiveMemberEntity;
}

export default class MemberFactory
  extends BaseFactory
  implements IMemberFactory
{
  createActiveMember(params: ActiveMemberFactoryParams): ActiveMemberEntity {
    const seed = {
      ...params,
    };
    // ここでconstructorで処理したい値のバリデーションなどをかけることができる
    return this.createEntity(ActiveMemberEntity, seed);
  }
}
