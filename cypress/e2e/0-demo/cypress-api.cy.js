describe('Practice', () => {

    // let sharedSecret

    // before(() => {
    //     sharedSecret = Cypress.env('sharedSecret')
    // })

    // it.skip('can be accessed within test.', () => {
    //     cy.log(sharedSecret)
    // })

    // it('has CSS reflections', () => {
    //     // if in Chromium-based browser (Chrome, Electron, etc...)
    //     // check css property was properly applied
    //     if (Cypress.isBrowser({ family: 'chromium' })) {
    //         cy.get('.header').should('have.css', '-webkit-box-reflect', 'left')
    //     }
    // })

    it('API', () => {
        // cy.log(Cypress.arch)
        // if (Cypress.arch === 'x64') {
        //     cy.exec('something')
        // } else {
        //     cy.exec('something else')
        // }

        // cy.wrap(Object.entries(Cypress.browser)).each(([field, value]) => {
        //     cy.log(field, value)
        // })

        // cy.wrap(Object.entries(Cypress.config())).each(([field, value]) => {
        //     cy.log(field, value)
        // })

        // Cypress.Cookies.debug(true, { verbose: false })

        // cy.log(Cypress.currentRetry)

        // cy.log(Cypress.currentTest)
        // cy.log(Cypress.currentTest.title)
        // cy.log(Cypress.currentTest.titlePath)

        // cy.log(Cypress.platform)

        // it('has JSON files', () => {
        //     // if windows do one thing, else do another
        //     const cmd = Cypress.platform === 'win32' ? 'dir *.json' : 'ls *.json'

        //     cy.exec(cmd).its('stdout').should('include', 'package.json')
        // })

        // cy.wrap(Object.entries(Cypress.spec)).each(([field, value]) => {
        //     cy.log(field, value)
        // })
        
        // cy.log(Cypress.testingType)

        // cy.log(Cypress.version)
    })
})
