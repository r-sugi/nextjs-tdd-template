export const isServerAppError = (payload: unknown): boolean => {
  return false;
};

export class ServerAppError extends Error {
  constructor(payload: unknown) {
    super();
  }
}
