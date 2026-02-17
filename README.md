# Cypress E2E Tests — Production portal

## Overview

This repository contains end-to-end test for **Creating templates** in Production Portal, written in [Cypress](https://www.cypress.io/) (v11.6.2). The test covers the full user journey from login through to creating and saving a new template.

---

## Project Structure

```
cypress/
├── e2e/
│   └── templates.cy.ts         # Test specs for Templates management
├── support/
│   ├── commands.ts             # Custom Cypress commands
│   └── e2e.ts                  # Global support file (imported automatically)
cypress.config.ts               # Cypress configuration
tsconfig.json                   # TypeScript configuration
```

---

## Setup

### Prerequisites

- Node.js installed
- Cypress 11.6.2 installed (`npm install cypress@11.6.2 --save-dev`)
- TypeScript and Cypress types installed (`npm install --save-dev typescript @types/cypress`)

### Environment Variables

The tests require credentials passed via Cypress environment variables. Create a `cypress.env.json` file in the root of the project (do **not** commit this file):

```json
{
  "username": "your-username",
  "password": "your-password"
}
```

---

## Running the Tests

Open the Cypress Test Runner interactively:

```bash
npm run cypress:open
```

Or run headlessly in CI:

```bash
npm run cypress:run
```