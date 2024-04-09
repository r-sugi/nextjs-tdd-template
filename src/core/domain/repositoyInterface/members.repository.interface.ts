import ActiveMemberEntity from "../entity/activeMember.entity";

export abstract class IMemberRepository {
  findActiveMemberOne:
    | (({
        member_id,
      }: {
        member_id: number;
      }) => Promise<ActiveMemberEntity | null>)
    | undefined;
  resignMember:
    | (({
        activity_input: { status, member_id, member_resigns },
      }: {
        activity_input: {
          status: string;
          member_id: number;
          member_resigns: {
            data: [
              {
                member_id: number;
                reason: string;
              }
            ];
          };
        };
      }) => Promise<boolean>)
    | undefined;
}
