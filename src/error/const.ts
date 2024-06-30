export type RuntimeError = {
	cause?: unknown | string;
	stack?: string;
};

export type AppErrorMessage = {
	title?: string;
	message?: string;
	myErrorCode: string;
	level: "fatal" | "error" | "warning" | "info" | "debug";
	// runtime error
	runtime?: RuntimeError;
};

export type AppServerErrorMessage = AppErrorMessage & {
	status: number;
};

export const APP_ERROR = {
	SYSTEM: {
		RECOVERABLE: {},
		UNRECOVERABLE: {
			EE98: {
				// 非同期処理が完了しなかったエラー
				title: "エラーが発生しました",
				message:
					"しばらく時間をおいてから再度お試しください。解消しない場合は開発者にお問い合わせください",
				myErrorCode: "EE98",
				level: "fatal",
			},
			EE99: {
				// 予期せぬエラー
				title: "エラーが発生しました",
				message:
					"しばらく時間をおいてから再度お試しください。解消しない場合は開発者にお問い合わせください",
				myErrorCode: "EE99",
				level: "fatal",
			},
		},
	},
	BUSINESS: {
		RECOVERABLE: {
			AU10: {
				// firebaseエラー
				title: "サインアップエラー",
				message: "メールアドレスはすでに利用されています。",
				myErrorCode: "AU10",
				level: "error",
			},
			AU20: {
				// firebaseエラー
				title: "ログインエラー",
				message: "メールアドレスまたはパスワードが間違っています。",
				myErrorCode: "AU20",
				level: "error",
			},
			H400: {
				// 不正なリクエスト
				title: "Bad Request",
				message: "不正なリクエストです。",
				myErrorCode: "H400",
				level: "error",
			},
			H401: {
				// 認証エラー
				title: "Unauthorized",
				message: "認証エラー",
				myErrorCode: "H401",
				level: "error",
			},
			H403: {
				// アクセス禁止
				title: "Forbidden",
				message: "アクセスが禁止されています。",
				myErrorCode: "H403",
				level: "error",
			},
			H404: {
				// リソースがない
				title: "Not Found",
				message: "リソースが見つかりませんでした。",
				myErrorCode: "H404",
				level: "error",
			},
			H408: {
				// タイムアウト
				title: "Request Timeout",
				message: "タイムアウトしました。",
				myErrorCode: "H408",
				level: "error",
			},
		},
		UNRECOVERABLE: {
			H500: {
				// サーバーエラー
				title: "Internal Server Error",
				message: "サーバーエラーが発生しました。",
				myErrorCode: "H500",
				level: "fatal",
			},
			AU99: {
				// firebaseエラー
				title: "ネットワークエラー",
				message:
					"認証処理でネットワークエラーが発生しました。時間をおいて再度試してください",
				myErrorCode: "AU99",
				level: "fatal",
			},
		},
	},
} as const;
