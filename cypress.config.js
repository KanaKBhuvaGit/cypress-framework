const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) {

    }
  },
});
