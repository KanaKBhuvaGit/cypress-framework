import ENDPOINTS from '../../fixtures/constants/endPoints'

describe('Get api example', () => {

    it('Case 1: Using request coomand', () => {
        cy.request(ENDPOINTS.users).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body.data)
        })
    })

})
