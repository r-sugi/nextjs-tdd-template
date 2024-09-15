import pino, { type Logger as PinoLogger } from "pino";

const config = {
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},
};

export class Logger {
	private readonly p: PinoLogger;
	private context: Record<string, unknown> = {};

	constructor() {
		if (typeof window !== "undefined") {
			this.p = pino({
				...config,
				browser: { asObject: true },
				level: this.logLevel(),
			});
		} else {
			this.p = pino({
				...config,
				level: this.logLevel(),
			});
		}
	}

	setContext(context: string): void {
		this.context = Object.assign(this.context, { context });
	}

	logLevel() {
		let logLevel: pino.LevelWithSilent;
		switch (process.env.NODE_ENV) {
			case "development":
				logLevel = "trace";
				break;
			case "test":
				logLevel = "trace";
				break;
			default:
				logLevel = "error";
		}
		return logLevel;
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	debug(message: any): void {
		this.p.debug({ message, ...this.context });
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	info(message: any): void {
		this.p.info({ message, ...this.context });
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	error(message: any): void {
		this.p.error({ message, ...this.context });
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	critical(message: any): void {
		// pinoにcriticalはないのでerrorで代用
		this.p.error({ message, ...this.context });
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	fatal(message: any): void {
		this.p.fatal({ message, ...this.context });
	}
}
