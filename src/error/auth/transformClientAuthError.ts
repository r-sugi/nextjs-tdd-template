import { ClientLogger } from "@/lib/clientLogger";
import type { FirebaseError } from "firebase/app";

// @remarks transform error log for display on screen if you want
export const transformClientAuthError = (error: FirebaseError) => {
	if (error.code === "auth/user-not-found") {
		new ClientLogger().error(error);
		// TODO: send error to errorlog server
		return error;
	}
	if (error.code === "auth/email-already-in-use") {
		new ClientLogger().error(error);
		// TODO: send error to errorlog server
		return error;
	}
	if (error.code === "auth/network-request-failed") {
		new ClientLogger().fatal(error);
		// TODO: send error to errorlog server
		return error;
	}
	new ClientLogger().fatal(error);
	// TODO: send error to errorlog server
	return error;
};
