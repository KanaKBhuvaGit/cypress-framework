const { recurse } = require("cypress-recurse")

describe('Zebpay exercise', () => {

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://zebpay.com/markets')
  })

  it('24% Max/min', () => {

    recurse(
      () => cy.get('#view_more_market'),
      ($button) => $button.attr('style') === 'display: none;',
      {
        log: false,
        delay: 2000,
        timeout: 300000,
        post() {
          cy.get('#view_more_market').click()
        }
      }
    )

    const title = []
    const twenty_four = []
    cy.get('#all >tbody >tr').each(($row) => {
      title.push($row.find('.tittle').text())
      twenty_four.push(parseFloat($row.find('td:nth-child(4)').text().replace('%',"")))
    }).then(()=>{
      cy.log()
      const maxVal = Math.max(...twenty_four)
      const minVal = Math.min(...twenty_four)
      const maxValTitle = title[twenty_four.indexOf(maxVal)]
      const minValTitle = title[twenty_four.indexOf(minVal)]
      cy.log("Maximum 24% " + maxValTitle + ":" + maxVal)
      cy.log("Minimum 24%" + minValTitle + ":" + minVal)
      expect().to.include()
    })
  })

})
