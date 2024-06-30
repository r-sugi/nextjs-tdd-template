import { isSentryEnabled } from "@/config/env";
import { Logger } from "@/lib/logger";
import * as Sentry from "@sentry/nextjs";
import type { AppErrorMessage } from "./const";

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

export const outputErrorLog = async (error: AppErrorMessage) => {
	logging(error);
	sendLog(error);
};
