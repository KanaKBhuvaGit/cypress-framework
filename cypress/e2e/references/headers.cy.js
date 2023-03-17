
import ENDPOINTS from '../../fixtures/constants/endPoints';

describe('Headers', () => {
    beforeEach('should request the endpoint under test', () => {
        cy.request(ENDPOINTS.users).as('usersEndpoint');
    });

    it('should assert the values of the page content type header', () => {
        cy.getEndpointHeader('content-type')
            .should('include', 'application/json')
            .and('include', ' charset=utf-8');
    });

    it('should assert the value of the server header', () => {
        cy.getEndpointHeader('server').should('include', 'cloudflare');
    });

    it('should assert the value of the cache-control header', () => {
        cy.getEndpointHeader('cache-control').should('eq', 'max-age=14400');
    });
});