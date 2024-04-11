import ActiveMember from "@/core/domain/entity/activeMember.entity";

export class ActiveMemberDTO {
  public readonly statusActivityId!: number;
  public readonly memberId!: number;
  public readonly address!: string;
  public readonly postalCode!: string;
  public readonly birthday!: Date;
  public readonly createdAt!: Date;

  constructor(activeMember: ActiveMember) {
    this.statusActivityId = activeMember.statusActivityId;
    this.memberId = activeMember.memberId;
    this.address = activeMember.address;
    this.postalCode = activeMember.postalCode;
    this.birthday = activeMember.birthday;
    this.createdAt = activeMember.createdAt;
  }
}
