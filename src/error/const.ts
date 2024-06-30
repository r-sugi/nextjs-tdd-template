type RuntimeError = {
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

// TODO: 下記の型だとEE99までサジェストされないので、直したい
type AppErrorObject = Record<string, AppErrorMessage>;

type AppError = {
	SYSTEM: {
		RECOVERABLE: AppErrorObject;
		UNRECOVERABLE: AppErrorObject;
	};
	BUSINESS: {
		RECOVERABLE: AppErrorObject;
		UNRECOVERABLE: AppErrorObject;
	};
};

export const APP_ERROR: AppError = {
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
		},
		UNRECOVERABLE: {
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
};
