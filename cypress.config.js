const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": false,
    // defaultCommandTimeout: 100000,
    setupNodeEvents(on, config) { }
  },
});
