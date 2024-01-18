// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import locators from "../support/locators";

Cypress.Commands.add('login', (email, password) => {
    cy.get(locators.elements.emailInput).should('be.visible').type(email)
    cy.get(locators.elements.passwordInput).should('be.visible').type(password)
    cy.get('.oxd-button').click()
})

Cypress.Commands.add('logout', () => {
    cy.wait(2000)
    cy.get('.oxd-userdropdown-tab').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})