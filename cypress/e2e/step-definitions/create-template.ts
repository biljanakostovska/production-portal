/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const PRODUCTION_PORTAL = 'https://productionportal.master.mediagenix.io'

Given('I am logged in to the Production Portal', () => {
  cy.login()
})

Given('I navigate to "Configurations" page', () => {
  cy.goToConfigurations()
})

Given('I open the "Templates" tab', () => {
  cy.goToTemplates()
})

When('I click on the "Create Template" button', () => {
  cy.clickCreateTemplate()
})

When('I enter a name in the "Template name" field', () => {
  const templateName = `Test template ${Date.now()}`
  cy.origin(PRODUCTION_PORTAL, { args: { templateName } }, ({ templateName }) => {
    Cypress.on('uncaught:exception', () => false)
    cy.get('input[data-testing-name="templates-name-form-input"]')
      .scrollIntoView()
      .should('be.visible')
      .clear()
      .type(templateName)
  })
})

When('I enable the "Set as default" toggle', () => {
  cy.origin(PRODUCTION_PORTAL, () => {
    Cypress.on('uncaught:exception', () => false)
    cy.get('button[data-testing-name="templates-isDefault-form-input"]')
      .scrollIntoView()
      .should('have.attr', 'aria-checked', 'false')
      .click()
      .should('have.attr', 'aria-checked', 'true')
  })
})

When('I click the "Save" button', () => {
  cy.origin(PRODUCTION_PORTAL, () => {
    Cypress.on('uncaught:exception', () => false)
    cy.get('button[data-testing-name="save-form"]')
      .scrollIntoView()
      .should('be.visible')
      .click()
  })
})

Then('I see a "Template created" message', () => {
  cy.origin(PRODUCTION_PORTAL, () => {
    Cypress.on('uncaught:exception', () => false)
    cy.contains('Template created').should('be.visible')
  })
})
