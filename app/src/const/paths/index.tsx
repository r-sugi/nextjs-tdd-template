const title = (page: string | undefined) => {
	const site = "myWebSite | マイウェブサイト";
	return page ? `${page} | ${site}` : site;
};

const publicPages = {
	index: {
		path: () => "/",
		title: () => title("トップページ"),
		titleShort: "トップページ",
		description: () => "トップページです。",
	},
	articleDetail: {
		path: (articleId: string) => `/articles/${articleId}`,
		title: (aTitle?: string) => title(aTitle ?? "個別記事"),
		titleShort: "記事タイトル",
		description: (aDescription: string) => aDescription,
	},
	signUp: {
		path: () => "/signUp",
		title: () => title("会員登録"),
		titleShort: "会員登録",
		description: () => "会員登録です。",
	},
	signIn: {
		path: () => "/signIn",
		title: () => title("サインイン"),
		titleShort: "サインイン",
		description: () => "サインインです。",
	},
};

const loginRequiredPages = {
	mypage: {
		path: () => "/mypage",
		title: () => title("マイページ"),
		titleShort: "マイページ",
		description: () => "マイページ",
	},
	mypageResignMemberInput: {
		path: () => "/mypage/resign-member/input",
		title: () => title("退会申請入力ページ"),
		titleShort: "退会申請入力ページ",
		description: () => "退会申請入力ページ",
	},
	mypageResignMemberConfirm: {
		path: () => "/mypage/resign-member/confirm",
		title: () => title("退会申請確認ページ"),
		titleShort: () => "退会申請確認ページ",
		description: () => "退会申請確認ページ",
	},
};

const loginFormPagePaths = [
	publicPages.signIn.path(),
	publicPages.signUp.path(),
];

const loginRequiredPagePaths = [
	loginRequiredPages.mypage.path(),
	loginRequiredPages.mypageResignMemberInput.path(),
	loginRequiredPages.mypageResignMemberConfirm.path(),
];

const adminSecretPages = {
	members: {
		path: () => "/admin/members",
		title: () => title("管理画面 会員一覧"),
		titleShort: "管理画面 会員一覧",
		description: () => "管理画面 会員一覧",
	},
	allMembers: {
		path: () => "/admin/allMembers",
		title: () => title("管理画面 会員一覧2"),
		titleShort: "管理画面 会員一覧2",
		description: () => "管理画面 会員一覧2",
	},
};

export {
	publicPages,
	loginRequiredPages,
	adminSecretPages,
	loginFormPagePaths,
	loginRequiredPagePaths,
};
