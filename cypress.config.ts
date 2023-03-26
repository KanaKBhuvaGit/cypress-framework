import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": false,
    // defaultCommandTimeout: 30000,
    // screenshotOnRunFailure: false,
    // specPattern:[],
    setupNodeEvents(on, config) {

    }
  },
});