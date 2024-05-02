import { ActiveMember } from '@/core/domains/member/activeMember';

export const activeMember: ActiveMember = {
  status: 'active',
  statusActivityId: '1',
  memberId: 'xxx-eeee-ddddd',
  address: 'Tokyo',
  postalCode: '100-0001',
  email: 'hoge@example.com',
  birthday: new Date('1987-05-01'),
  createdAt: new Date('2024-05-01'),
};
