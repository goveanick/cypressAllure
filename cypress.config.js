// import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins")
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
  env: {
    allure: true,
  },
});
