module.exports = {
	ignore: [
		"**/*.d.ts",
		// Unused files
		"src/__mocks__/@sentry/nextjs.ts",
		"src/__mocks__/firebase/auth.ts",
		"functions/src/index.ts",
		"mocks/**/*.ts",
		"public/mockServiceWorker.js",
		"src/error/errors/unhandledRejectionError.ts",
		// Unused exports, Unused exported types of component templates
		"src/components/**/*.*",
		"biome.js",
		"functions/lib/**",
		"functions/src/index.ts",
		"src/api/articles/[id]/index.ts",
	],
	ignoreWorkspaces: ["src/generated/**"],
	ignoreDependencies: [
		// Unused devDependencies
		"next-router-mock",
		"jest-environment-jsdom",
		"pino-pretty",
		"reg-keygen-git-hash-plugin",
		"reg-publish-gcs-plugin",
		"reg-notify-github-plugin",
		// Unlisted dependencies
		"dotenv",
	],
	ignoreBinaries: ["docker-compose", "npm-run-all"],
};
