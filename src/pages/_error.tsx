import { publicPages } from "@/const/paths";
import { APP_ERROR, type AppServerErrorMessage } from "@/error/const";
import * as Sentry from "@sentry/nextjs";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Error from "next/error";
import { ServerErrorScreen } from "./_error/_server/_error.screen";

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

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
CustomErrorComponent.getInitialProps = async (contextData: any) => {
	// In case this is running in a serverless function, await this in order to give Sentry
	// time to send the error before the lambda exits
	// TODO: developmentのときはskipさせる
	await Sentry.captureUnderscoreErrorException(contextData);

	// This will contain the status code of the response
	return Error.getInitialProps(contextData);
};

export default CustomErrorComponent;
