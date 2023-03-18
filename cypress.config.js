const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "video": true,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://reqres.in",
    setupNodeEvents(on, config) {

    }
  },
});
