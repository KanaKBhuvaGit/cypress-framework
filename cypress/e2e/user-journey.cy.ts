describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit("http://localhost:3000")
        cy.getByTestData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByTestData("next-lesson-button").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/app-install-and-overview"
        )

        cy.getByTestData("challenge-answer-0").click()
        cy.getByTestData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
        )

        cy.getByTestData("challenge-answer-0").click()
        cy.getByTestData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/setting-up-data-before-each-test"
        )
        cy.getByTestData("challenge-answer-0").click()
        cy.getByTestData("next-lesson-button").should("exist").click()

        cy.location("pathname").should("eq", "/")
    })
})
