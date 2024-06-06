export const WebStorageTypeDefault = "session";

export type WebStorageType = "local" | "session";

export const selectWebStorage = (storageType?: WebStorageType) => {
	switch (storageType) {
		case "local":
			return window.localStorage;
		case "session":
		default:
			return window.sessionStorage;
	}
};
