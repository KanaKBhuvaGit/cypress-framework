describe('Demo', () => {


    it('Start 1', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://gateway-web.si.eus.bd-infusion.com/')
        cy.origin('https://core-int.bdx-cloud.com', () => {


            cy.get('input[id="email"]', { timeout: 100000 }).type('behnood82@bd-infusion.com')
            cy.get('button[value="email-submit"]', { timeout: 100000 }).click()
            cy.get('input[id="Password"]', { timeout: 100000 }).type('Carefusion1!')
            cy.get('button[value="login"]', { timeout: 100000 }).click()
            cy.visit('https://gateway-web.si.eus.bd-infusion.com/managedevices');
            //cy.get('[aria-rowindex="16"] > .facility-group-cell > .device-group-link-wrapper > a', { timeout: 100000 }).click()
            //cy.get('input[href="/managedevices"]', { timeout: 100000 }).click()
            //cy.contains('Devices', { timeout: 100000 }).click()
            //cy.get('[aria-rowindex="16"] > .facility-group-cell > .device-group-link-wrapper > a').click()
        })
        cy.get('[aria-rowindex="13"] > .facility-group-cell > .device-group-link-wrapper > a', { timeout: 200000 }).click()
        cy.get('input[aria-label="Select"]', { timeout: 100000 }).parent('label').click()
        cy.get('button[data-test-id="ActionsButton"]', { timeout: 100000 }).click()
        cy.get('button[data-test-id="DeployButton"]', { timeout: 100000 }).click()
        cy.get('a[data-test-id="AddSoftwareElementActions"]', { timeout: 100000 }).click()
        cy.get('button[data-test-id="FirmwarePackageButton"]', { timeout: 100000 }).click()
        cy.get('input[data-test-id="v0.19.21.2RadiobuttonRow"]', { timeout: 100000 }).check({ force: true })
        cy.get('button[data-test-id="SelectSoftwareElementButton"]', { timeout: 100000 }).click()
        cy.get('input[data-test-id="BDSearchInput_input"]', { timeout: 100000 }).type("DG1_MK")
        cy.get('input[aria-label="Select"]', { timeout: 100000 }).parent('label').click()
        cy.get('button[data-test-id="DeployButton"]', { timeout: 100000 }).click()
        cy.get('button[data-test-id="ModalApproveButton"]', { timeout: 100000 }).click()


        // cy.get('[aria-colindex="2"] > .btn', { timeout: 100000 }).check()
        //cy.get('input[href="/managedevices"]', { timeout: 100000 }).click()
        // cy.contains('Devices', { timeout: 100000 }).click()

        //cy.get('input[id="email"]', { timeout: 100000 }).type('behnood82@bd-infusion.com')

        // cy.get('select[name="Username"]', { timeout: 100000 }).select('System')
        // cy.get('button[value="login"]', { timeout: 100000 }).click()
        // cy.contains('Devices', { timeout: 100000 }).click()
        //cy.get('a[data-test-id="ConfigZoneName_test"]', { timeout: 100000 }).click()
        //cy.get('[aria-rowindex="3"] > .facility-group-cell > .device-group-link-wrapper > a',{ timeout: 100000 }).click()
        //cy.get('input[aria-label="Select"]', { timeout: 100000 }).parent('label').click()
        //cy.get('button[data-test-id="ActionsButton"]', { timeout: 100000 }).click()
        // cy.get('button[data-test-id="DeployButton"]', { timeout: 100000 }).click()
        //cy.get('a[data-test-id="AddSoftwareElementActions"]', { timeout: 100000 }).click()
        //cy.get('button[data-test-id="FirmwarePackageButton"]', { timeout: 100000 }).click()
        //cy.get('input[data-test-id="v13.0.0.20RadiobuttonRow"]', { timeout: 100000 }).check({ force: true })
        //cy.get('button[data-test-id="SelectSoftwareElementButton"]', { timeout: 100000 }).click()
    })
})