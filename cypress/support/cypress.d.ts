import './commands'

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            getByCyData(value: string): Chainable<JQuery<HTMLElement>>
            getByTestData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
        }
    }
}