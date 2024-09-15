import { publicPages } from "@/const/paths";
import { APP_ERROR, type AppServerErrorMessage } from "@/error/const";
import { outputServerErrorLog } from "@/error/outputErrorLog";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Error from "next/error";
import { ServerErrorScreen } from "./_error/_server/_error.screen";

// ErrorScreenの描画処理
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const CustomErrorComponent = (props: any) => {
	const errorMessage: AppServerErrorMessage = {
		...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
		status: props.statusCode,
	};

	return (
		<ServerErrorScreen
			error={errorMessage}
			onReset={() => {
				window.location.href = publicPages.index.path();
			}}
		/>
	);
};

// ErrorBaundary処理
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
CustomErrorComponent.getInitialProps = async (contextData: any) => {
	// In case this is running in a serverless function, await this in order to give Sentry
	// time to send the error before the lambda exits
	const errorMessage: AppServerErrorMessage = {
		...APP_ERROR.SYSTEM.UNRECOVERABLE.EE99,
		status: contextData.statusCode,
		runtime: contextData,
	};
	await outputServerErrorLog(errorMessage);

	// This will contain the status code of the response
	return Error.getInitialProps(contextData);
};

export default CustomErrorComponent;
