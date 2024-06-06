module.exports = {
	$schema: "https://biomejs.dev/schemas/1.8.0/schema.json",
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
		include: ["src/**"],
		indentWidth: 2,
		indentStyle: "space",
		lineWidth: 100,
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
		include: ["src/**"],
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
