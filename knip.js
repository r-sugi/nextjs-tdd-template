module.exports = {
  ignore: [
    '**/*.d.ts',
    // Unused files
    'mocks/browser.ts',
    'mocks/index.ts',
    'mocks/server.ts',
    'mocks/rest/restHandlers.ts',
    'public/mockServiceWorker.js',
    'src/__todo/PostIdErrorBoundary.tsx',
    'src/__todo/PostIdErrorScreen.tsx',
    'src/error/errors/unhandledRejectionError.ts',
  ],
  ignoreWorkspaces: ['src/generated/graphql.tsx'],
  ignoreDependencies: [
    // Unused devDependencies
    'next-router-mock',
    'msw',
    'jest-environment-jsdom',
    // Unlisted dependencies
    'dotenv',
  ],
  ignoreBinaries: ['docker-compose', 'npm-run-all'],
};
