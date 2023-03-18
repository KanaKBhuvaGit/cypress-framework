import LoginPage from "../../pages/loginPage"
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

const lPage = new LoginPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('User is on the Login Page', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

When('User enters username {string}', (username) => {
    lPage.enterUsername(username)
})

When('User enters password {string}', (password) => {
    lPage.enterPassword(password)
})

When('User clicks on the submit button', () => {
    lPage.clickSubmit()
})

Then('User should see an error message like {string}', (message) => {
    lPage.getError().should('be.visible')
    lPage.getError().should('have.text', message)
})

Then('User should see a message {string} on the dashboard page', (message) => {
    cy.contains(message).should('be.visible')
})
