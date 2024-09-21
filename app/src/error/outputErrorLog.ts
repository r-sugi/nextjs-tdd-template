import { isSentryEnabled } from "@/config/env";
import { Logger } from "@/lib/logger";
import * as Sentry from "@sentry/nextjs";
import type { AppErrorMessage, AppServerErrorMessage } from "./const";

const logging = (error: AppErrorMessage) => {
	switch (error.level) {
		case "fatal":
			new Logger().fatal(error);
			break;
		case "error":
			new Logger().error(error);
			break;
		case "info":
			new Logger().info(error);
			break;
		case "debug":
			new Logger().debug(error);
			break;
		default:
			new Logger().info(error);
	}
};

const sendLog = (error: AppErrorMessage) => {
	if (isSentryEnabled && ["fatal", "error"].includes(error.level)) {
		Sentry.captureException(error);
	}
};

export const outputErrorLog = (error: AppErrorMessage) => {
	logging(error);
	sendLog(error);
};

export const outputServerErrorLog = async (error: AppServerErrorMessage) => {
	if (isSentryEnabled && ["fatal", "error"].includes(error.level)) {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		await Sentry.captureUnderscoreErrorException(error as any);
	}
};
