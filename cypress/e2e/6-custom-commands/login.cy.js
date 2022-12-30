it('does something on a secured page', function () {
    const { username, password } = this.currentUser
    cy.login(username, password)

    // ...rest of test
})