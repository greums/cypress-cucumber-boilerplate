import cucumberStep from 'cypress-cucumber-preprocessor/lib/resolveStepDefinition'
import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'


Given(`I open Cypress page`, () => {
  cy.visit('https://www.cypress.io/')
})

Then(`I see {string} in the title`, (text) => {
  cy.contains('h1', text)
})
