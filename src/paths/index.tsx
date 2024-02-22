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
  posts: {
    path: () => "/posts",
    title: () => title("投稿一覧"),
    description: () => "投稿一覧のページです。",
  },
  postId: {
    path: (id: string | number) => `/posts/${id}`,
    title: () =>
      title(`投稿詳細`),
    description: () => "投稿詳細のページです。",
  },
};

export { publicPages };
