// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('readExcel', (inputFilePath) => {
    return cy.task('readExcel', { filePath: inputFilePath })
})

Cypress.Commands.add('writeExcel', (inputFilePath, inputSheetName,  inputFileData) => {
    return cy.task('writeExcel', { filePath: inputFilePath, sheetName: inputSheetName,  data: inputFileData })
})

Cypress.Commands.add('readCSV', (inputFilePath) => {
    return cy.task('readCSV', { filePath: inputFilePath })
})

Cypress.Commands.add('writeToCSV', (inputFilePath, inputFileData) => {
    return cy.task('writeToCSV', {filePath: inputFilePath, csvData: inputFileData})
})