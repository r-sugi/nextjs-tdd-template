type ClientAppErrorOption = {
  level: "fatal" | "critical" | "error";
};

export class ClientAppError extends Error {
  private readonly level: "fatal" | "critical" | "error";

  constructor(payload: unknown, options?: ClientAppErrorOption) {
    super();
    this.level = options?.level ?? "error";
  }
}
