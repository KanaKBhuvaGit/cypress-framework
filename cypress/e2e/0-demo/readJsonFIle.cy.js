describe('element', () => {
    beforeEach('Read file', () => {
        cy.fixture('users.json').as('u')
    })
    it('Access data', () => {
        cy.get('@u').then((u) => {
            const name = u[1].name
            expect(name).to.eq('Ervin Howell')
        })
    })

})