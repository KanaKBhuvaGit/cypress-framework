const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    baseUrl: "https://reqres.in/",
    setupNodeEvents(on, config) {

    }
  },
});
