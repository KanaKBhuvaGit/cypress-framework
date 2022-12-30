/// <reference types="cypress" />

describe('We will make a connection with Postgres', () => {
    it('First connection', () => {
        cy.task("connectDB", "SELECT * FROM public.tasks ORDER BY id ASC LIMIT 100").then((res) => {
            cy.log(res[0].id);
            cy.log(res[0].text);
            cy.log(res[0].completed);
            cy.log(res[0].inserted_at);
            cy.log(res[0].updated_at);
        })
    })
})
