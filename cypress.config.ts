import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
    specPattern: ['tests/api/**/*.suite.ts', 'tests/ui/**/*.suite.ts'],
    supportFile: 'support.file.ts',

    video: false,
    videosFolder: 'files',
    screenshotsFolder: 'files',
    downloadsFolder: 'files',
    fixturesFolder: 'fixtures',
    trashAssetsBeforeRuns: true,

    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 5,
  },
});
