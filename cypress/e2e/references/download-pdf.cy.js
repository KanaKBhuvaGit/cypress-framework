describe('Downloads', () => {
    it('download pdf for Git commands', () => {
        cy.request({
            url: 'https://about.gitlab.com/images/press/git-cheat-sheet.pdf',
            encoding: 'binary',
        }).then((response) => {
            cy.writeFile('./cypress/downloads/git-cheat-sheet.pdf', response.body, 'binary')
        })
    })
})
