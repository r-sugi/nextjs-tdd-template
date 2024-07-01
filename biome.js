module.exports = {
	$schema: "https://biomejs.dev/schemas/1.8.0/schema.json",
	files: {
		include: ["src/**"],
		ignore: [
			"**/node_modules/**",
			"src/generated/types.ts",
			"src/**/*.generated.ts",
		],
	},
	vcs: {
		enabled: true,
		clientKind: "git",
		useIgnoreFile: true,
	},
	organizeImports: {
		enabled: true,
	},
	formatter: {
		enabled: true,
		// include: ["src/**"],
		indentWidth: 2,
		indentStyle: "space",
		lineWidth: 100,
		ignore: ["**/node_modules/**", "**/generated/**"],
	},
	javascript: {
		parser: {
			unsafeParameterDecoratorsEnabled: true,
		},
		formatter: {
			enabled: true,
			quoteStyle: "single",
			jsxQuoteStyle: "single",
			semicolons: "always",
			arrowParentheses: "always",
			quoteProperties: "asNeeded",
		},
	},
	linter: {
		enabled: true,
		// include: ["src/**"],
		rules: {
			recommended: true,
			style: {
				useSelfClosingElements: "error",
			},
			suspicious: {
				noDebugger: "error",
				noConsoleLog: "error",
			},
		},
	},
};
