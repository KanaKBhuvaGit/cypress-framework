const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": true,
    "specPattern": "cypress/e2e/1-getting-started/*.js",
    // defaultCommandTimeout: 30000,
    // screenshotOnRunFailure: false,
    setupNodeEvents(on, config) { }
  },
});