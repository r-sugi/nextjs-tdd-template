import { NoCacheError } from "./error";
import { SessionStorageKeys, SessionStorageKeyValues } from "./type";
import { selectWebStorage, WebStorageType } from "./useWebStorage";

export const getCache = <
  K extends SessionStorageKeys,
  V extends SessionStorageKeyValues[K]
>(
  key: K,
  storageType?: WebStorageType
): V => {
  const storage = selectWebStorage(storageType);
  const parsedValue = () => {
    const value = storage.getItem(key) as string | null;
    if (value !== null) {
      return JSON.parse(value) as V;
    }
    return value;
  };

  const object = parsedValue();
  if (object === null) {
    throw new NoCacheError("Failed to parse storage value");
  }
  return object;
};

export const setCache = <
  K extends SessionStorageKeys,
  S extends SessionStorageKeyValues[K]
>(
  key: K,
  object: S,
  storageType?: WebStorageType
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
