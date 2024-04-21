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
  mypageResigMember: {
    path: () => "/mypage/resign-member",
    title: () => title("退会ページ"),
    description: () => "退会ページ",
  },
};

const adminSecretPages = {
  members: {
    path: () => "/admin/members",
    title: () => title("会員一覧"),
    description: () => "会員一覧",
  },
};

export { publicPages, loginRequiredPages, adminSecretPages };
