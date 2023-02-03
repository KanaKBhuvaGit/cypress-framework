describe('Demo', () => {

    it('Start 1', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://gateway-web.si.eus.bd-infusion.com/')
        cy.origin('https://core-int.bdx-cloud.com', () => {

            cy.get('input#email').type('behnood82@bd-infusion.com')
            cy.get('button#button').click()
            cy.get('input#Password').type('Carefusion1!')
            cy.get('button#button').click()
            cy.visit('https://gateway-web.si.eus.bd-infusion.com/managedevices');
        })
        cy.get('input[data-test-id="BDSearchInput_input"]').type("DG1_MK")
        cy.get('input[aria-label="Select"]').parent('label').click()
        cy.get('button[data-test-id="ActionsButton"]').click()
        cy.get('button[data-test-id="DeployButton"]').click()
        cy.get('a[data-test-id="AddSoftwareElementActions"]').click()
        cy.get('button[data-test-id="FirmwarePackageButton"]').click()
        cy.get('input[data-test-id="v0.19.21.2RadiobuttonRow"]').check({ force: true })
        cy.get('button[data-test-id="SelectSoftwareElementButton"]').click()
        cy.get('input[data-test-id="BDSearchInput_input"]').type("DG1_MK")
        cy.get('input[aria-label="Select"]').parent('label').click()
        cy.get('button[data-test-id="DeployButton"]').click()
        cy.get('button[data-test-id="ModalApproveButton"]').click()
    })
})