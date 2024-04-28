import { SessionStorageKeyValues } from "./type";
import { selectWebStorage, WebStorageType } from "./useWebStorage";

export const useGetCache = <
  K extends keyof SessionStorageKeyValues,
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
    throw new Error("Failed to parse storage value");
  }
  return object;
};

export const useSetCache = <
  K extends keyof SessionStorageKeyValues,
  S extends SessionStorageKeyValues[K]
>(
  key: K,
  storageType?: WebStorageType
): ((value: S) => void) => {
  const storage = selectWebStorage(storageType);

  const setValue = (object: S) => {
    try {
      storage.setItem(key, JSON.stringify(object));
    } catch (error) {
      throw new Error("Failed to set storage value");
    }
  };
  return setValue;
};
