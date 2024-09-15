import type { GlobalAuthState } from "app/src/feature/auth/provider/AuthProvider";

export const stubAuthContext = {
	signedIn: {
		member: {
			uid: "1",
		},
	} as GlobalAuthState,
	signedOut: {
		member: null,
	} as GlobalAuthState,
};
