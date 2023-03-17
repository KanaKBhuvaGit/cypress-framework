import ENDPOINTS from '../../fixtures/constants/end-points'
import REQUEST from '../../fixtures/constants/request-methods'

describe('Get api example', () => {

    it('Case 1: Using request coomand', () => {
        cy.request({ method: REQUEST.DELETE, url: ENDPOINTS.delete_user }).then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.eq('')
        })
    })

})
