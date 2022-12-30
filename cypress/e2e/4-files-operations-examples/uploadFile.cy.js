/// <reference types="cypress"/>


// HTML5 file input
// cySubject.attachFile(fixture, optionalProcessingConfig);


// Drag - n - drop component
// cy.get('[data-cy="dropzone"]')
//     .attachFile('myfixture.json', { subjectType: 'drag-n-drop' });


// Attaching multiple files
// cy.get('[data-cy="file-input"]')
// .attachFile(['myfixture1.json', 'myfixture2.json']);


// Working with file encodings
// cy.get('[data-cy="file-input"]')
// .attachFile({ filePath: 'test.shp', encoding: 'utf-8' });


// Override the file name
// cy.get('[data-cy="file-input"]')
//     .attachFile({ filePath: 'myfixture.json', fileName: 'customFileName.json' });


// Working with empty fixture file
// cy.get('[data-cy="file-input"]')
//     .attachFile({ filePath: 'empty.txt', allowEmpty: true });


// Working with raw file contents
// const special = 'file.spss';

// cy.fixture(special, 'binary')
//     .then(Cypress.Blob.binaryStringToBlob)
//     .then(fileContent => {
//         cy.get('[data-cy="file-input"]').attachFile({
//             fileContent,
//             fileName: 'whatever',
//             mimeType: 'application/octet-stream',
//             filePath: special,
//             encoding: 'utf-8',
//             lastModified: new Date().getTime()
//         });
//     });