describe('Find max score', () => {
  before(() => {
    cy.visit('https://www.cricbuzz.com/')
  })

  it('Max score', () => {
    cy.xpath('//ul[contains(@class, "cb-mtch-crd-rt-itm")]/li[1]').click()
    cy.contains('Scorecard').click()
    cy.xpath('//*[@id="innings_1"]/div[1]/div[contains(@class, "cb-scrd-itms")]//a').should('have.length', '11')

    //  **** Using Then *****
    // cy.xpath('//*[@id="innings_1"]/div[1]/div[contains(@class, "cb-scrd-itms")]').then(($players) => {
    //   const playersList = $players.children('div').children('a').toArray()
    //   const runs = $players.children('div:nth-child(3)').toArray()
    //   const PlayerNames = []
    //   const PlayerRuns = []
    //   for(var i = 0; i < playersList.length; i ++){
    //     console.log( "kkkkkkk" + playersList[i].textContent)
    //     if(playersList[i].textContent !== "") {
    //       PlayerNames.push(playersList[i].textContent)
    //       PlayerRuns.push(parseInt(runs[i].textContent))
    //     }
    //   }
    //   const maxRuns = Math.max(...PlayerRuns)
    //   const playerName = PlayerNames[PlayerRuns.indexOf(maxRuns)]
    //   cy.log("Maximum " + maxRuns + " runs scored by " + playerName)
    // })

    // ***** Using Each *****
    const players = []
    const runs = []
    cy.xpath('//*[@id="innings_1"]/div[1]/div[contains(@class, "cb-scrd-itms")]').each(($el) => {
      if($el.find('div > a').text() !== "") {
        players.push($el.find('div > a').text())
        runs.push($el.find('div:nth-child(3)').text())
      }
    }).then(() => {
      const maxRuns = Math.max(...runs)
      const playerName = players[runs.indexOf(maxRuns.toString())]
      cy.log("Maximum " + maxRuns + " runs scored by " + playerName)
    })
  })

})
