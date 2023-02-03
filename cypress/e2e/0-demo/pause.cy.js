describe('Tutorialspoint Test', function () {
    // test case
    it('Scenario 1', function () {
        // launch the application
        cy.visit("https://accounts.google.com");
        // enable cookie logging
        Cypress.Cookies.debug(true)
        cy.getCookies
        //pause execution
        cy.pause()
        cy.setCookie('cookie1', 'value1')
    });
});