export class NoCacheError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "NoCacheError";
	}
}
