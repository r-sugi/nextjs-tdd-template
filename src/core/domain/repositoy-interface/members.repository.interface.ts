import MemberEntity from "../entity/MemberEntity";

export abstract class IMemberRepository {
  findMemberOne:
    | (({ status }: { status: string }) => Promise<MemberEntity | undefined>)
    | undefined;
}
