module.exports = {
	ignore: [
		"**/*.d.ts",
		// Unused files
		"src/__mocks__/**/*.*",
		"functions/src/index.ts",
		"mocks/**/*.ts",
		"public/mockServiceWorker.js",
		"src/error/errors/unhandledRejectionError.ts",
		"postcss.config.js",
		// Unused exports, Unused exported types of component templates
		"src/components/**/*.*",
		"biome.js",
		"functions/lib/**",
		"functions/.bin/**",
		"functions/src/index.ts",
		"src/api/articles/[id]/index.ts",
		"src/mocks/fixtures/member/allMembers.ts",
	],
	ignoreWorkspaces: ["src/generated/**"],
	ignoreDependencies: [
		// Unused devDependencies
		"next-router-mock",
		"jest-environment-jsdom",
		"pino-pretty",
		"lefthook",
		// Unlisted dependencies
		"dotenv",
		"ts-node",
	],
	ignoreBinaries: ["docker-compose", "sed"],
};
