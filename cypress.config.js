const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "reporter": "mochawesome",
    "reporterOptions":{
      "charts": true,
      "overwrite": false,
      "html": true,
      "json": false,
      "reportDir": "cypress/reports"
    },
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
