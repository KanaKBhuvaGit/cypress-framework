const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "video": false,
    // defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) { }
  },
});

// npx cypress run--reporter mochawesome

// npx mochawesome - merge cypress / report / mochawesome - report/*.json ＞ cypress/report/output.json

// npx mochawesome-merge cypress/report/mochawesome-report/*.json | out-file -encoding ascii cypress/report/output.json

// npx marge cypress / report / output.json--reportDir./ --inline