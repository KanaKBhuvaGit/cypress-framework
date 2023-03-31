/// <reference types="cypress/">
import LoginPage from "../pages/login"

const lPage = new LoginPage()

describe('test login  ', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('Test Case 1: Positive LogIn test', { tags: ['smoke', 'regression'] }, () => {
    lPage.enterUsername("student")
    lPage.enterPassword("Password123")
    lPage.clickSubmit()
    cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/')
    cy.contains('Congratulations').should('be.visible')
    cy.contains('successfully logged in').should('be.visible')
  })

  it('Test Case 2: Negative username test',{ tags: [] }, () => {
    lPage.enterUsername("incorrectUser")
    lPage.enterPassword("Password123")
    lPage.clickSubmit()
    lPage.getError().should('be.visible')
    lPage.getError().should('have.text', 'Your username is invalid!')
  })

  it('Test Case 3: Negative password test',{ tags: ['smoke'] }, () => {
    lPage.enterUsername("student")
    lPage.enterPassword("incorrectPassword")
    lPage.clickSubmit()
    lPage.getError().should('be.visible')
    lPage.getError().should('have.text', 'Your password is invalid!')
  })

})