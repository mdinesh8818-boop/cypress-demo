const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ww5zpk",   // <-- add this line
  e2e: {
    setupNodeEvents(on, config) {},
  },
});