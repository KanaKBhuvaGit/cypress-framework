const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;

module.exports = defineConfig({
  e2e: {
    "video": true,
    watchForFileChanges: false,
    specPattern: ["cypress/e2e/features/*.feature"],
    async setupNodeEvents(on, config) {
      require("@deploysentinel/cypress-recorder")(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        }),
      );
      return config;
    },
  },
});
