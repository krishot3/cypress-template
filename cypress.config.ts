import { defineConfig } from 'cypress';
import writeFileTask from './tools/tasks/write.file';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: ['tests/api/**/*.suite.ts', 'tests/ui/**/*.suite.ts'],
    supportFile: 'support.file.ts',

    async setupNodeEvents(on) {
      writeFileTask(on);
    },

    env: {
      apiUrl: 'http://localhost:4000',
    },

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
