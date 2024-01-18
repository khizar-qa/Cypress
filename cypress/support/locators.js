class locators {
    elements = {
        emailInput: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwordInput: () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        dashboard: () => cy.get('.oxd-topbar-header-breadcrumb > .oxd-text'),
        loginheading: () => cy.get('.oxd-text--h5'),
        myInfo: () => cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text'),
        dob: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
        saveinfo: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'),

    }
}

module.exports = new locators();