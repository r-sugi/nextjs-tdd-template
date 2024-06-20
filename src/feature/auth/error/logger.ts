import { ClientLogger } from "@/lib/clientLogger";
import type { FirebaseError } from "firebase/app";

// @remarks transform error log for users if you transform error message
export const clientAuthErrorLogger = (error: FirebaseError) => {
	if (error.code === "auth/user-not-found") {
		new ClientLogger().error(error);
		return error;
	}
	if (error.code === "auth/email-already-in-use") {
		new ClientLogger().error(error);
		return error;
	}
	if (error.code === "auth/network-request-failed") {
		new ClientLogger().fatal(error);
		return error;
	}
	new ClientLogger().fatal(error);
	return error;
};
