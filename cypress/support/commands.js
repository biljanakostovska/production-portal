const PRODUCTION_PORTAL = 'https://productionportal.master.mediagenix.io'

Cypress.Commands.add('login', () => {
  cy.visit('https://accounts.master.mediagenix.io/login')

  cy.get('input[name="username"]').type(Cypress.env('username'))
  cy.get('button[type="submit"]').click()
  cy.get('input[name="password"]').type(Cypress.env('password'))
  cy.get('button[type="submit"]').click()

  cy.visit(`${PRODUCTION_PORTAL}/`)
  cy.url({ timeout: 10000 }).should('include', 'productionportal.master.mediagenix.io')
})

Cypress.Commands.add('goToConfigurations', () => {
  cy.origin(PRODUCTION_PORTAL, () => {
    Cypress.on('uncaught:exception', (err) => {
      if (
        err.message.includes('predefinedFunctions') ||
        err.message.includes('predefinedAttachments')
      ) {
        return false
      }
    })
    cy.get('a[href="/configurations"]', { timeout: 10000 })
      .should('be.visible')
      .click()
  })
})

Cypress.Commands.add('goToTemplates', () => {
  cy.origin(PRODUCTION_PORTAL, () => {
    Cypress.on('uncaught:exception', (err) => {
      if (
        err.message.includes('predefinedFunctions') ||
        err.message.includes('predefinedAttachments')
      ) {
        return false
      }
    })
    cy.get('a[href="/configurations/templates"]', { timeout: 10000 })
      .should('be.visible')
      .click()
  })
})

Cypress.Commands.add('clickCreateTemplate', () => {
  cy.origin(PRODUCTION_PORTAL, () => {
    Cypress.on('uncaught:exception', (err) => {
      if (
        err.message.includes('predefinedFunctions') ||
        err.message.includes('predefinedAttachments')
      ) {
        return false
      }
    })
    cy.get('button[data-testing-name="add-Template-button"]', { timeout: 10000 })
      .should('be.visible')
      .click()
  })
})