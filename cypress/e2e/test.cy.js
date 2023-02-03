describe('Demo', () => {
    beforeEach(() => {
        // cy.visit('https://gateway-web.test.eus.bd-infusion.com/')
        // cy.origin('https://gateway-web.si.eus.nbd-infusion.com/', () => {
        //     cy.visit('')
        // })
        cy.origin('somesite.com', () => {
            cy.visit('http://www6.somesite.com')
        })
    })

    it('Start 1', () => {


        cy.get('#master-1').click()
        // cy.on('uncaught:exception', (err, runnable) => {
        //     return false
        // })
        // cy.get('select[name="Username"]').select('System')
        //     cy.get('button[value="login"]').click()
        // cy.contains('Web Site Hosting').click()
        //     cy.get('a[data-test-id="ConfigZoneName_test"]', { timeout: 100000 }).click()
        //     cy.get('input[aria-label="Select"]', { timeout: 100000 }).parent('label').click()
        //     cy.get('button[data-test-id="ActionsButton"]', { timeout: 100000 }).click()
        //     cy.get('button[data-test-id="DeployButton"]', { timeout: 100000 }).click()
        //     cy.get('a[data-test-id="AddSoftwareElementActions"]', { timeout: 100000 }).click()
        //     cy.get('button[data-test-id="FirmwarePackageButton"]', { timeout: 100000 }).click()
        //     cy.get('input[data-test-id="v13.0.0.20RadiobuttonRow"]', { timeout: 100000 }).check({ force: true })
        //     cy.get('button[data-test-id="SelectSoftwareElementButton"]', { timeout: 100000 }).click()
        // })
    })

    // it('Start 1', () => {
    // cy.on('uncaught:exception', (err, runnable) => {
    //     return false
    // })
    // cy.get('select[name="Username"]').select('System')
    //     cy.get('button[value="login"]').click()
    //     cy.contains('Devices').click()
    //     cy.get('a[data-test-id="ConfigZoneName_test"]', { timeout: 100000 }).click()
    //     cy.get('input[aria-label="Select"]', { timeout: 100000 }).parent('label').click()
    //     cy.get('button[data-test-id="ActionsButton"]', { timeout: 100000 }).click()
    //     cy.get('button[data-test-id="DeployButton"]', { timeout: 100000 }).click()
    //     cy.get('a[data-test-id="AddSoftwareElementActions"]', { timeout: 100000 }).click()
    //     cy.get('button[data-test-id="FirmwarePackageButton"]', { timeout: 100000 }).click()
    //     cy.get('input[data-test-id="v13.0.0.20RadiobuttonRow"]', { timeout: 100000 }).check({ force: true })
    //     cy.get('button[data-test-id="SelectSoftwareElementButton"]', { timeout: 100000 }).click()
    // })
    // })

})