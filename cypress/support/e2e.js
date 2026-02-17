import './commands'

Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('predefinedFunctions') ||
    err.message.includes('predefinedAttachments')
  ) {
    return false
  }
})