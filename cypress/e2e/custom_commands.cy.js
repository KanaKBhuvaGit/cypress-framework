describe('Demo', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/forgot_password')
    })

    it('Custom command', () => {
        cy.simpleClick('Retrieve password')
    })
})
