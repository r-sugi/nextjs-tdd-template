module.exports = {
	ignore: [
		"**/*.d.ts",
		// Unused files
		"functions/src/index.ts",
		"mocks/browser.ts",
		"mocks/index.ts",
		"mocks/server.ts",
		"mocks/rest/restHandlers.ts",
		"public/mockServiceWorker.js",
		"src/error/errors/unhandledRejectionError.ts",
		"src/__todo/PostIdErrorBoundary.tsx",
		"src/__todo/PostIdErrorScreen.tsx",
		// Unused exports, Unused exported types of component templates
		"src/components/**/*.*",
		"biome.js",
		"functions/lib/**",
		"functions/src/index.ts",
	],
	ignoreWorkspaces: ["src/generated/**"],
	ignoreDependencies: [
		// Unused devDependencies
		"next-router-mock",
		"msw",
		"jest-environment-jsdom",
		"eslint-import-resolver-typescript",
		// Unlisted dependencies
		"dotenv",
	],
	ignoreBinaries: ["docker-compose", "npm-run-all"],
};
