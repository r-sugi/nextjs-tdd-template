module.exports = {
	ignore: [
		"**/*.d.ts",
		// Unused files
		"src/__mocks__/**/*.*",
		"mocks/**/*.ts",
		"public/mockServiceWorker.js",
		"postcss.config.js",
		// Unused exports, Unused exported types of component templates
		"src/components/**/*.*",
		"biome.js",
		"src/mocks/fixtures/member/allMembers.ts",
	],
	ignoreWorkspaces: ["src/generated/**"],
	ignoreDependencies: [
		// Unused devDependencies
		"next-router-mock",
		"jest-environment-jsdom",
		"pino-pretty",
		// Unlisted dependencies
		"dotenv",
		"ts-node",
	],
	ignoreBinaries: ["sed"],
};
