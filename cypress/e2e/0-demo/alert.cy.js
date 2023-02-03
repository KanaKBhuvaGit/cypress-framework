describe('Tutorialspoint Test', function () {

    it("Scenario 1", function () {
        //URL launched
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //fire confirm browser event and accept

        cy.get(':nth-child(1) > button').click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('p#result').should('have.text', "You successfully clicked an alert")

        cy.get(':nth-child(2) > button').click()
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("I am a JS Confirm");
            cy.on('window:confirm', (t) => {
                expect(t).to.equal("I am a JS Confirm")
                return false;
            })
        });
        cy.get('p#result').should('have.text', "You clicked: Ok")

        cy.get(':nth-child(2) > button').click()
        cy.get('p#result').should('have.text', "You clicked: Cancel")


        cy.window().then((p) => {
            cy.stub(p, "prompt").returns("Tutorialspoint");
        });
        cy.get(':nth-child(3) > button').click()
        cy.get('#result').contains('You entered: Tutorialspoint')


        cy.window().then((p) => {
            cy.stub(p, "prompt").callsFake(() => null);
            cy.get(':nth-child(3) > button').click()
        });
        cy.get('#result').contains('You entered: null')
    });
});