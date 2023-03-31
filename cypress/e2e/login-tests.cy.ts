/// <reference types="cypress/">
import LoginPage from "../pages/login"
import TestFilters from "../support/filterTests"

const lPage = new LoginPage()

describe('test login  ', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  TestFilters(['regression', 'smoke'], () => {
    it('Test Case 1: Positive LogIn test', () => {
      lPage.enterUsername("student")
      lPage.enterPassword("Password123")
      lPage.clickSubmit()
      cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/')
      cy.contains('Congratulations').should('be.visible')
      cy.contains('successfully logged in').should('be.visible')
    })
  })

  TestFilters(['smoke'], () => {
    it('Test Case 2: Negative username test', () => {
      lPage.enterUsername("incorrectUser")
      lPage.enterPassword("Password123")
      lPage.clickSubmit()
      lPage.getError().should('be.visible')
      lPage.getError().should('have.text', 'Your username is invalid!')
    })
  })

  TestFilters([], () => {
    it('Test Case 3: Negative password test', () => {
      lPage.enterUsername("student")
      lPage.enterPassword("incorrectPassword")
      lPage.clickSubmit()
      lPage.getError().should('be.visible')
      lPage.getError().should('have.text', 'Your password is invalid!')
    })
  })

})