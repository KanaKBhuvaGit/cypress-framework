const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": true,
    "specPattern": "cypress/e2e/1-getting-started/*.js",
    // defaultCommandTimeout: 30000,
    // screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results',
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // },
});