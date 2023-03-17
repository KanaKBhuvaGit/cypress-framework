import ENDPOINTS from '../../fixtures/constants/end-points'
import REQUEST from '../../fixtures/constants/request-methods'
import { UPDATE_USER } from '../../fixtures/data'

describe('Get api example', () => {

    it('Case 1: Using request coomand', () => {
        cy.request({ method: REQUEST.PUT, url: ENDPOINTS.update_user, body: UPDATE_USER }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body.name)
            cy.log(response.body.job)
            cy.log(response.body.updatedAt)
            const headers = response.headers
            cy.log(headers['content-type'])
        })
    })

})
