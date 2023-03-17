
describe('Users API', () => {
    beforeEach(() => cy.request('/users').as('users'));

    it('returns a JSON data', () => {
        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    it('return the correct status code', () => {
        cy.get('@users').its('status').should('be.equal', 200);
    });

    it('should return the correct number of users', () => {
        cy.get('@users').its('body').should('have.length', 10);
        cy.get('@users').its('body[0].id').should('be.equal', 1);
        cy.get('@users').its('body[0].name').should('be.equal', 'Leanne Graham');
    });
});