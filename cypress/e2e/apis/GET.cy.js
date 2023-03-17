import ENDPOINTS from '../../fixtures/constants/end-points'
import QUERY_PARAMS from '../../fixtures/constants/query-params'
import REQUEST from '../../fixtures/constants/request-methods'

describe('Get api example', () => {

    it('Case 1: Using request coomand', () => {
        cy.request({ method: REQUEST.GET, url: ENDPOINTS.users, qs: QUERY_PARAMS.QP_PAGE }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body.data[0].email)
            const headers = response.headers
            cy.log(headers['content-type'])
        })
    })

})
