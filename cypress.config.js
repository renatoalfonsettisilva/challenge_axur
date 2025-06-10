const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler());
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://www.amazon.com.br',
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false
  }
});
