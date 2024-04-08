import ActiveMemberEntity from "../entity/activeMember.entity";

export abstract class IMemberRepository {
  findActiveMemberOne:
    | (({
        member_id,
      }: {
        member_id: number;
      }) => Promise<ActiveMemberEntity | null>)
    | undefined;
}
