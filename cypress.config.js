const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://accounts.master.mediagenix.io/',
    setupNodeEvents(on, config) {
      // implement node events if needed
    }
  },
})