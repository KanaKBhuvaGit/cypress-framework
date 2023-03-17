import ENDPOINTS from '../../fixtures/constants/end-points'
import REQUEST from '../../fixtures/constants/request-methods'
import { NEW_USER } from '../../fixtures/data'

describe('Get api example', () => {

    it('Case 1: Using request coomand', () => {
        cy.request({ method: REQUEST.POST, url: ENDPOINTS.users, body: NEW_USER }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log(response.body.id)
            cy.log(response.body.name)
            cy.log(response.body.job)
            cy.log(response.body.createdAt)
            const headers = response.headers
            cy.log(headers['content-type'])
        })
    })

})
