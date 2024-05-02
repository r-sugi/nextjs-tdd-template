import { MemberActive } from "@/generated/graphql"

const memberActive: MemberActive = {
  statusActivityId: '1',
  memberId: 'xxx-eeee-ddddd',
  address: 'Tokyo',
  postalCode: '100-0001',
  email: 'hoge@example.com',
  birthday: '1987-05-01',
  createdAt: '2024-05-01',
}

export const successMembersRespository = {
  memberActive
}
