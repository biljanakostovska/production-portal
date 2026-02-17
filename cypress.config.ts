import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://accounts.master.mediagenix.io/',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // implement node events if needed
    }
  }
})