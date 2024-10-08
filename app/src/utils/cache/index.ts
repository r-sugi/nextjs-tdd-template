import { NoCacheError } from "./error";
import type { SessionStorageKeyValues, SessionStorageKeys } from "./type";
import {
	type WebStorageType,
	WebStorageTypeDefault,
	selectWebStorage,
} from "./useWebStorage";

type GetCacheOption = {
	storageType?: WebStorageType;
	fallback?: boolean;
};

export const getCache = <
	K extends SessionStorageKeys,
	V extends SessionStorageKeyValues[K],
>(
	key: K,
	options?: GetCacheOption,
): V => {
	if (typeof window === "undefined") {
		// ビルド時にwindowオブジェクトが存在せず、エラーになるのを防ぐ
		return {} as V;
	}

	const storage = selectWebStorage(
		options?.storageType || WebStorageTypeDefault,
	);
	const parsedValue = () => {
		const value = storage.getItem(key) as string | null;
		if (value !== null) {
			return JSON.parse(value) as V;
		}
		return value;
	};

	const object = parsedValue();
	if (object == null && options?.fallback) {
		return {} as V;
	}
	if (object == null) {
		throw new NoCacheError("Failed to parse storage value");
	}
	return object;
};

export const setCache = <
	K extends SessionStorageKeys,
	S extends SessionStorageKeyValues[K],
>(
	key: K,
	object: S,
	storageType?: WebStorageType,
): void => {
	const storage = selectWebStorage(storageType);

	try {
		storage.setItem(key, JSON.stringify(object));
	} catch (error) {
		throw new NoCacheError("Failed to set storage value");
	}
};

export const removeCache = (key: SessionStorageKeys): void => {
	const storage = selectWebStorage();
	storage.removeItem(key);
};
