export const ERROR_CODE = {
	INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;
// type ErrorCode = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];

type AppErrorMessage = {
	title?: string;
	message?: string;
	myErrorCode: string;
};

export const MY_ERROR: Readonly<Record<string, AppErrorMessage>> = {
	EER99: {
		title: "エラーが発生しました",
		message:
			"しばらく時間をおいてから再度お試しください。解消しない場合は開発者にお問い合わせください",
		myErrorCode: "EER99",
	},
};
