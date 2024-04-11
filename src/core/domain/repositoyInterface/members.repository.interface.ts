import ActiveMemberEntity from "../entity/activeMember.entity";

// TODO: I/F GraphQLのvariablesを書いているだけなので不毛
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
        activity_input: { status, member_id, member_resign },
      }: {
        activity_input: {
          status: string;
          member_id: number;
          member_resign: {
            data: {
              member_id: number;
              reason: string;
              reason_type: string;
              reason_detail: string;
              agreement: boolean;
            };
          };
        };
      }) => Promise<boolean>)
    | undefined;
}
