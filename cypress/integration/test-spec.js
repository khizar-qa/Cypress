/// <reference types="cypress" /> 

import locators from "../support/locators";

describe('Test Login Functionality', () => {

    Cypress.on('uncaught:exception', () => {
        return false;
    });

    it('should login to the website', () => {
        cy.visit('/')
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.login(this.data.username, this.data.password)
            cy.get(locators.elements.dashboard).contains('Dashboard')
            cy.contains('Invalid credentials').should('not.exist')
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })
    })
})


describe('Navigate to MyInfo and verify/update Date of Birth field', () => {

    Cypress.on('uncaught:exception', () => {
        return false;
    });

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.login(this.data.username, this.data.password)
            cy.get(locators.elements.dashboard).contains('Dashboard')
            cy.contains('Invalid credentials').should('not.exist')
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })
    })

    it('should verify and update DOB field', function () {
        cy.get(locators.elements.myInfo).should('be.visible').click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7')
        cy.get(locators.elements.dob).should('have.length.greaterThan', 0)
        cy.get(locators.elements.dob).should('be.visible').clear()
        cy.get(locators.elements.dob).should('be.visible').type('2019-10-05')
        cy.get(locators.elements.saveinfo).should('be.visible').click()
        cy.get(locators.elements.dob).should('have.value', '2019-10-05')
    })
})

describe('Test Logout Functionality', () => {

    Cypress.on('uncaught:exception', () => {
        return false;
    });

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.login(this.data.username, this.data.password)
            cy.get(locators.elements.dashboard).contains('Dashboard')
            cy.contains('Invalid credentials').should('not.exist')
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        })

    })

    it('should logout a user', function () {
        cy.logout()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(locators.elements.loginheading).contains('Login')
    })
})