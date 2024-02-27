describe('Read/Write Excel', function () {

    it('Read excel(xlsx) file', function () {
        cy.readExcel('cypress/fixtures/file-processing/EXCEL/file_example_XLSX_10.xlsx').then(
            jsonData => {
                cy.log(jsonData[0].data[1].length)
                cy.log(jsonData[0].data.length)
                cy.log(jsonData[0].data[1][0])
                cy.log(jsonData[0].data[1][1])
                cy.log(jsonData[0].data[1][2])
                cy.log(jsonData[0].data[1][3])
                cy.log(jsonData[0].data[1][4])
                cy.log(jsonData[0].data[1][5])
                cy.log(jsonData[0].data[1][6])
                cy.log(jsonData[0].data[1][7])
                cy.log(jsonData[0].data[1][8])
                expect(jsonData[0].data[10][8]).to.eq(undefined)
            }
        )
    })

    it('Read excel(xls) file', function () {
        cy.readExcel('cypress/fixtures/file-processing/EXCEL/file_example_XLS_10.xls').then(
            jsonData => {
                cy.log(jsonData[0].data[1].length)
                cy.log(jsonData[0].data.length)
                cy.log(jsonData[0].data[1][0])
                cy.log(jsonData[0].data[1][1])
                cy.log(jsonData[0].data[1][2])
                cy.log(jsonData[0].data[1][3])
                cy.log(jsonData[0].data[1][4])
                cy.log(jsonData[0].data[1][5])
                cy.log(jsonData[0].data[1][6])
                cy.log(jsonData[0].data[1][7])
                cy.log(jsonData[0].data[1][8])
                expect(jsonData[0].data[10][8]).to.eq(undefined)
            }
        )
    })

    it('Write excel(xls) file', function () {

        const data = [
            ['0', 'First Name', 'Last Name', 'Gender', 'Country', 'Age', 'Date', 'Id'],
            ['1', 'Dulce', 'Abril', 'Female', 'United States', '32', '15/10/2022', '1562'],
            ['2', 'Mara', 'Hashimoto', 'Male', 'Great Britain', '23', '15/10/2023', '1582'],
            ['3', 'Philip', 'Gent', 'Female', 'France', '45', '15/10/2021', '2587'],
            ['4', 'Kathleen', 'Hanner', 'Male', 'France', '57', '15/10/2020', '3549']
        ]

        cy.writeExcel('cypress/fixtures/file-processing/EXCEL/file_example_XLS_10_test.xls', "Sheet1", data)
    })

});
