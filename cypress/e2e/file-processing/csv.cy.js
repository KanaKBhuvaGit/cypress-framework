/// <reference types="Cypress" />

describe('Read/Write CSV', function () {

    it('Read csv file', function () {
        cy.readCSV('cypress/fixtures/file-processing/CSV/username.csv').then((data) => {
            data.forEach(element => {
                cy.log(element.Username)
                cy.log(element.Identifier)
                cy.log(element.FirstName)
                cy.log(element.LastName)
                cy.log("-----------------")
            });
        })
    });

    it('Write to csv file', function () {
        const userData = [
            ['UserName', 'Identifier', 'Firstname', 'LastName'],
            ['KanakBhuva', '4564', 'Kanak', 'Bhuva'],
            ['SavanJ', '31', 'Savan', 'Javia']
        ]

        cy.writeToCSV('cypress/fixtures/file-processing/CSV/Test.csv', userData)
    });

});
