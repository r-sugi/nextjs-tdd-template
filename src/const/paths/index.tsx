const title = (page: string | undefined) => {
  const site = "myWebSite | マイウェブサイト";
  return page ? `${page} | ${site}` : site;
};

const publicPages = {
  index: {
    path: () => "/",
    title: () => title("トップページ"),
    description: () => "トップページです。",
  },
};

const loginRequiredPages = {
  mypage: {
    path: () => "/mypage",
    title: () => title("マイページ"),
    description: () => "マイページ",
  },
  mypageResignMemberInput: {
    path: () => "/mypage/resign-member/input",
    title: () => title("退会申請入力ページ"),
    description: () => "退会申請入力ページ",
  },
  mypageResignMemberConfirm: {
    path: () => "/mypage/resign-member/confirm",
    title: () => title("退会申請確認ページ"),
    description: () => "退会申請確認ページ",
  },
};

const adminSecretPages = {
  members: {
    path: () => "/admin/members",
    title: () => title("管理画面 会員一覧"),
    description: () => "管理画面 会員一覧",
  },
};

export { publicPages, loginRequiredPages, adminSecretPages };
