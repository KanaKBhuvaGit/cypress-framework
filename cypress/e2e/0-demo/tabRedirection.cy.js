describe('Tutorialspoint', function () {
    // test case
    it('Scenario 1', function () {
        // url launch
        cy.visit("https://the-internet.herokuapp.com/windows")
        // delete target attribute with invoke for link
        cy.get('.example > a')
            .invoke('removeAttr', 'target').click()
        // verify tab url
        cy.url()
            .should('include', 'https://the-internet.herokuapp.com/windows/new')
        // shift to parent window
        cy.get('h3').then((value) => {
            cy.log(value.text())
            console.log(value.text())
        })
        cy.get('h3').dblclick()
        cy.wait(5000)

        cy.go('back');
        cy.get('.large-4 > div > a')
            .invoke('removeAttr', 'target').click()
        // verify tab url
        cy.url()
            .should('include', 'http://elementalselenium.com/')


        cy.go('back')
    });
});