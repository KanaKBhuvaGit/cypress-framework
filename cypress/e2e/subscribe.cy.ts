describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByTestData("email-input").type("tom@aol.com")
        cy.getByTestData("submit-button").click()
        cy.getByTestData("success-message").should("exist").contains("tom@aol.com")
    })

    it("does NOT allow an invalid email address", () => {
        cy.getByTestData("email-input").type("tom")
        cy.getByTestData("submit-button").click()
        cy.getByTestData("success-message").should("not.exist")
    })

    it("does NOT allow already subscribed email addresses", () => {
        cy.getByTestData("email-input").type("john@example.com")
        cy.getByTestData("submit-button").click()
        cy.getByTestData("server-error-message")
            .should("exist")
            .contains("already exists. Please use a different email address.")
    })
})
