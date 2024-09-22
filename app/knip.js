module.exports = {
	ignore: [
		"**/*.d.ts",
		// Unused files
		"src/__mocks__/**/*.*",
		"src/mocks/**/*.*",
		"public/mockServiceWorker.js",
		"postcss.config.js",
		"biome.js",
		".dependency-cruiser.js",
		// Unused exports, Unused exported types of component templates
		"src/components/**/*.*",
	],
	ignoreWorkspaces: ["src/generated/**"],
	ignoreDependencies: [
		// Unused devDependencies
		"next-router-mock",
		"jest-environment-jsdom",
		"pino-pretty",
		"lefthook",
		"esbuild",
		"dependency-cruiser",
		// Unlisted dependencies
		"dotenv",
		"ts-node",
	],
	ignoreBinaries: ["docker-compose", "sed", "dot", "depcruise"],
};
