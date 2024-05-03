import { loginRequiredPages } from '@/const/paths';
import { IndexTemplate } from '@/feature/mypage/resignMember/confirm/';
import { Seo } from '@/pages/_seo/seo';

export default function Index() {
  return (
    <>
      <Seo
        title={loginRequiredPages.mypageResignMemberConfirm.title()}
        description={loginRequiredPages.mypageResignMemberConfirm.description()}
        path={loginRequiredPages.mypageResignMemberConfirm.path()}
      />
      <IndexTemplate />;
    </>
  );
}
