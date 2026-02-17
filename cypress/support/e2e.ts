/// <reference types="cypress" />

import './commands'

Cypress.on('uncaught:exception', (err: Error) => {
  if (
    err.message.includes('predefinedFunctions') ||
    err.message.includes('predefinedAttachments')
  ) {
    return false
  }
})