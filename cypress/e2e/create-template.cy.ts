/// <reference types="cypress" />

const PRODUCTION_PORTAL = 'https://productionportal.master.mediagenix.io'

describe('Templates management', () => {

  beforeEach(() => {
    cy.login()
    cy.goToConfigurations()
    cy.goToTemplates()
  })

  it('Create a new template', () => {
    const templateName: string = `New template ${Date.now()}`

    cy.clickCreateTemplate()

    cy.origin(PRODUCTION_PORTAL, { args: { templateName } }, ({ templateName }: { templateName: string }) => {
      Cypress.on('uncaught:exception', () => false)

      cy.get('input[data-testing-name="templates-name-form-input"]')
        .scrollIntoView()
        .should('be.visible')
        .clear()
        .type(templateName)

      cy.get('button[data-testing-name="templates-isDefault-form-input"]')
        .scrollIntoView()
        .should('have.attr', 'aria-checked', 'false')
        .click()
        .should('have.attr', 'aria-checked', 'true')

      cy.get('button[data-testing-name="save-form"]')
        .scrollIntoView()
        .should('be.visible')
        .click()

      cy.contains('Template created')
        .should('be.visible')
    })
  })
})